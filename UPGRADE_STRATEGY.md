# Dependency Upgrade Strategy

## Upgrade Order & Breaking Changes Analysis

This document outlines the strategic order for upgrading dependencies and key breaking changes to address.

---

## Phase 1: Code Quality Tools (Foundation)
**Priority: HIGH** | **Risk: LOW-MEDIUM**

### 1.1 Prettier (2.8.8 → 3.6.2)
**Order: FIRST** - Upgr before ESLint to avoid formatting conflicts

#### Breaking Changes:
- **Default trailing commas**: Now `all` instead of `es5`
- **Arrow function parentheses**: Changed default behavior
- **Single attribute per line** in JSX is now default

#### Required Actions:
```bash
# After upgrade, reformat entire codebase
npm run format
```

#### Files to Check:
- All `.jsx`, `.js` files may have formatting changes
- Verify `.prettierrc.js` config compatibility

---

### 1.2 Stylelint (15.11.0 → 16.25.0)
**Order: SECOND**

#### Breaking Changes:
- Node.js 14 support dropped (requires Node 18+)
- Several rules renamed/removed
- `declaration-block-no-duplicate-properties` now more strict

#### Required Actions:
```bash
# Check .nvmrc - should be Node 20.19.4 ✓
# Update stylelint config if needed
```

#### Files to Check:
- `stylelint.config.js`
- All `.scss` files

---

### 1.3 Stylelint-config-recess-order (4.6.0 → 7.3.0)
**Order: THIRD** - After stylelint core upgrade

#### Breaking Changes:
- May reorder CSS property declarations differently

#### Files to Check:
- All `.module.scss` files for property order changes

---

## Phase 2: ESLint Ecosystem (Critical Dependencies)
**Priority: HIGH** | **Risk: HIGH** ⚠️

### 2.1 ESLint (8.57.1 → 9.37.0)
**Order: FOURTH** - Major breaking changes!

#### Breaking Changes (v9.x - **MAJOR**):
1. **Flat Config System** - New config format required
   - Old `.eslintrc.js` → New `eslint.config.js`
   - Config structure completely changed
   
2. **Removed formatters** - Some formatters deprecated

3. **Plugins require explicit configuration**
   - All plugins must be imported in flat config

4. **Changed CLI flags**
   - `--ext` flag removed (use `--file-extension`)

#### Migration Required:
```javascript
// OLD: .eslintrc.js (current)
module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jest'],
  rules: { ... }
}

// NEW: eslint.config.js (needed)
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import airbnb from 'eslint-config-airbnb';

export default [
  js.configs.recommended,
  airbnb,
  {
    plugins: { react },
    rules: { ... }
  }
];
```

#### Required Actions:
1. **Create new `eslint.config.js`** using flat config
2. **Update all ESLint scripts** in `package.json`
3. **Test linting** on entire codebase
4. **Update CI/CD** workflows using ESLint

#### Files to Modify:
- **CREATE**: `eslint.config.js`
- **REMOVE**: `.eslintrc.js` (after migration)
- **UPDATE**: `package.json` scripts
- **UPDATE**: `.github/workflows/*.yml` (CI configs)

---

### 2.2 ESLint Config Prettier (8.10.2 → 10.1.8)
**Order: FIFTH** - After ESLint 9 migration

#### Breaking Changes:
- Requires ESLint 8.0+ (✓ we'll have 9.x)
- May conflict with old flat config format

#### Required Actions:
- Update import in new `eslint.config.js`

---

### 2.3 ESLint Plugins (Upgrade Together)
**Order: SIXTH** - All plugins after ESLint 9 migration

#### eslint-plugin-chai-friendly (0.7.4 → 1.1.0)
- May require config updates for ESLint 9

#### eslint-plugin-react-hooks (4.6.2 → 7.0.0)
- **Breaking**: Requires React 18.3+ (we have 18.2.0 - **UPGRADE REACT FIRST!**)
- New hook rules added

#### eslint-plugin-storybook (0.6.15 → 9.1.10)
- Massive version jump
- Requires Storybook 7+ (we have 7.0.17, upgrading to 9.1.10)
- New rules for Storybook 9

---

## Phase 3: React Ecosystem
**Priority: HIGH** | **Risk: MEDIUM**

### 3.1 React & React-DOM (18.2.0 → 18.3.x)
**Order: BEFORE Next.js upgrade**

#### Why First:
- Next.js 15 requires React 18.3+
- Relatively small React update (18.2 → 18.3)

#### Breaking Changes:
- Minimal - mostly bug fixes

---

## Phase 4: Next.js Ecosystem (Largest Changes)
**Priority: CRITICAL** | **Risk: VERY HIGH** ⚠️⚠️⚠️

### 4.1 Next.js (13.4.6 → 15.5.4)
**Order: SEVENTH** - After React upgrade

#### Breaking Changes (v14.x):
1. **Turbopack** is now default (can opt-out)
2. **Partial Prerendering** changes
3. **Server Actions** are stable
4. **Metadata API** changes

#### Breaking Changes (v15.x):
1. **App Router is default** (we're already using it ✓)
2. **Image component** changes:
   - `alt` is now required (we have this ✓)
   - `loading="lazy"` is default
   
3. **Link component** no longer needs `<a>` child:
   ```jsx
   // OLD (v13):
   <Link href="/about">
     <a>About</a>
   </Link>
   
   // NEW (v15):
   <Link href="/about">
     About
   </Link>
   ```
   
4. **Font optimization** changes
5. **Async Request APIs** - cookies, headers, params are now async

#### Required Actions:

**Check/Update Link Usage:**
```bash
# Search for Link with <a> children
grep -r "<Link" src/
```

**Files to Update:**
- `src/components/commons/SiteLink/SiteLink.jsx` - Already correct ✓

**Async Request APIs:**
```javascript
// OLD:
export async function GET(request) {
  const cookies = request.cookies.get('name');
}

// NEW:
export async function GET(request) {
  const cookies = await request.cookies();
  const value = cookies.get('name');
}
```

**Next.config.js Updates:**
- May need to add `turbo` configuration
- Check `experimental` flags

#### Test After Upgrade:
1. Build the app: `npm run build`
2. Run dev server: `npm run dev`
3. Check all routes render correctly
4. Test image loading
5. Test navigation/links

---

### 4.2 @next/bundle-analyzer (13.5.11 → 15.5.4)
**Order: WITH Next.js** - Must match Next.js version

#### No Breaking Changes
- Just needs to match Next.js version

---

## Phase 5: Testing Framework
**Priority: MEDIUM** | **Risk: MEDIUM**

### 5.1 Jest Core (29.7.0 → 30.2.0)
**Order: EIGHTH**

#### Breaking Changes (v30.x):
1. **Node.js 18+ required** (✓ we have 20.19.4)
2. **Snapshot format changes** - May need `--updateSnapshot`
3. **Timer mocks** behavior changed
4. **Transformer API** changes (affects babel-jest)

#### Required Actions:
```bash
# After upgrade, update snapshots
npm run test:unit -- --updateSnapshot
```

#### Files to Check:
- `jest.config.js`
- `jest.setup.js`
- All `.test.js` files

---

### 5.2 babel-jest (29.7.0 → 30.2.0)
**Order: WITH Jest** - Must match Jest version

#### Breaking Changes:
- Must match Jest 30.x

---

### 5.3 jest-environment-jsdom (29.7.0 → 30.2.0)
**Order: WITH Jest** - Must match Jest version

#### Breaking Changes:
- Must match Jest 30.x

---

### 5.4 babel-loader (9.2.1 → 10.0.0)
**Order: NINTH** - After babel-jest

#### Breaking Changes:
- Requires webpack 5+ (Next.js uses webpack 5 ✓)
- Node.js 18+ required (✓)

---

## Phase 6: Storybook
**Priority: MEDIUM** | **Risk: HIGH**

### 6.1 Storybook (7.6.20 → 9.1.10)
**Order: TENTH** - After Next.js upgrade

#### Breaking Changes (v8.x):
1. **Component Story Format 3 (CSF3)** is default
2. **Test runner** changes
3. **Addon API** changes

#### Breaking Changes (v9.x):
1. **Vite is default builder** (can use webpack)
2. **React 18.3+ required**
3. **Next.js 14+ required**

#### Required Actions:
1. Run Storybook's migration tool:
   ```bash
   npx storybook@latest upgrade
   ```
2. Update `.storybook/main.js`
3. Check all story files

#### Files to Check:
- `.storybook/main.js`
- `.storybook/preview.jsx`
- All `*.stories.js` files

---

## Phase 7: Size Monitoring
**Priority: LOW** | **Risk: LOW**

### 7.1 size-limit (8.2.6 → 11.2.0)
**Order: LAST**

#### Breaking Changes:
- Configuration format may have changed
- Check `budget.json`

---

## Recommended Upgrade Order Summary

```
1. prettier (2.8.8 → 3.6.2)
2. stylelint (15.11.0 → 16.25.0)
3. stylelint-config-recess-order (4.6.0 → 7.3.0)
4. react & react-dom (18.2.0 → 18.3.x) - BEFORE Next.js
5. eslint (8.57.1 → 9.37.0) - MAJOR MIGRATION REQUIRED
6. eslint-config-prettier (8.10.2 → 10.1.8)
7. eslint-plugin-chai-friendly (0.7.4 → 1.1.0)
8. eslint-plugin-react-hooks (4.6.2 → 7.0.0)
9. eslint-plugin-storybook (0.6.15 → 9.1.10)
10. next + @next/bundle-analyzer (13.x → 15.5.4) - TOGETHER
11. jest + babel-jest + jest-environment-jsdom (29.x → 30.x) - TOGETHER
12. babel-loader (9.2.1 → 10.0.0)
13. storybook (7.6.20 → 9.1.10)
14. size-limit (8.2.6 → 11.2.0)
```

---

## Critical File Checklist

Before upgrading, ensure these files are committed:

### Configuration Files:
- [ ] `.eslintrc.js` - Will need complete rewrite for ESLint 9
- [ ] `.prettierrc.js` - May need updates
- [ ] `stylelint.config.js` - May need updates
- [ ] `jest.config.js` - Check for compatibility
- [ ] `.storybook/main.js` - Major changes needed
- [ ] `next.config.js` - May need updates

### Source Files to Monitor:
- [ ] `src/components/commons/SiteLink/SiteLink.jsx` - Link usage
- [ ] `src/components/sections/ShowSiteHeader/ShowSiteHeader.jsx` - Image usage
- [ ] All `.test.js` files - Jest snapshots may change
- [ ] All `.scss` files - Linting may change property orders

### CI/CD Files:
- [ ] `.github/workflows/automated-tests.yml`
- [ ] `.github/workflows/*.yml` - Any using ESLint

---

## Post-Upgrade Testing Checklist

After each phase:

```bash
# 1. Run formatters
npm run format

# 2. Run linters
npm run lint:js
npm run lint:styles

# 3. Run tests
npm run test:unit

# 4. Run build
npm run build

# 5. Test dev server
npm run dev

# 6. Test Storybook (after Storybook upgrade)
npm run storybook:dev

# 7. Run E2E tests
npm run test:e2e:ci

# 8. Check bundle size
npm run test:size
```

---

## Migration Commands

### For gradual upgrade:

```bash
# Phase 1: Code quality
npm install prettier@3.6.2 --save-dev
npm install stylelint@16.25.0 stylelint-config-recess-order@7.3.0 --save-dev

# Phase 2: React (do this BEFORE Next.js)
npm install react@18.3 react-dom@18.3

# Phase 3: ESLint (MANUAL MIGRATION REQUIRED)
# 1. Backup current config
cp .eslintrc.js .eslintrc.js.backup

# 2. Install ESLint 9
npm install eslint@9.37.0 --save-dev

# 3. Install updated plugins
npm install eslint-config-prettier@10.1.8 --save-dev
npm install eslint-plugin-chai-friendly@1.1.0 --save-dev
npm install eslint-plugin-react-hooks@7.0.0 --save-dev
npm install eslint-plugin-storybook@9.1.10 --save-dev

# 4. Migrate config to flat format (MANUAL - see docs above)

# Phase 4: Next.js
npm install next@15.5.4 @next/bundle-analyzer@15.5.4

# Phase 5: Jest
npm install jest@30.2.0 babel-jest@30.2.0 jest-environment-jsdom@30.2.0 --save-dev
npm install babel-loader@10.0.0 --save-dev

# Phase 6: Storybook
npx storybook@latest upgrade
npm install storybook@9.1.10 --save-dev

# Phase 7: Size limit
npm install size-limit@11.2.0 --save-dev
```

---

## Rollback Strategy

If any phase fails:

```bash
# Restore package.json
git checkout package.json package-lock.json

# Reinstall dependencies
npm install

# Restore configs
git checkout .eslintrc.js jest.config.js next.config.js
```

---

## Resources

- [Next.js 15 Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
- [ESLint 9 Migration Guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0)
- [Jest 30 Changelog](https://github.com/jestjs/jest/blob/main/CHANGELOG.md)
- [Storybook 9 Migration](https://storybook.js.org/docs/migration-guide)
