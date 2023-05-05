![Production](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deploy.yml/badge.svg?event=release)
![Staging](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deploy.yml/badge.svg?event=prerelease)
![Development](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deploy.yml/badge.svg?event=push&branch=main)
![Application CI](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/application-ci.yml/badge.svg)
![PR Checks](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/pr-checks.yml/badge.svg)
![Dependabot](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/dependabot-automations.yml/badge.svg)

# AppName

App responsible for all appname related data.

## Setting up your repository

This template repository serves as a boilerplate/blueprint for any "New World" application for our department. All product string references have been agnosticized with detailed onboarding instructions in the README. This template repo will evolve and mature.

The goal of maintaining this is to two fold, decrease the time it takes to build new SPA UI's and increase uniformity across our front-end ecosystem. As it matures, more and more configuration, utilities, and logic which embodies what our application specific "standards" are as a team.

### Template References

There are a few repeated commented slugs repeated throughout the application.
Below are the intended uses for them.

- _TODO-ONBOARDING:_ This denotes a todo task which should be done after a new UI repository has been created. _IE: Create sentry project and paste in token value._
- _TODO-REVIEW:_ This denotes a sidebar discussion topic for frontend
  engineering team. All scaffolded items which need to be discussed as a group
  have this comment slug. To remove the comment, a consensus needs to be formed
  around whether the scaffolded item is kept, made optional, or removed.
- _Brand_ Across the templated UI, there are several references where the type
  of product was used. IE: game or comic As we move away from the feature /
  feature*item architecture, the generalized term \_brand* has been used to
  signify any reference to this parent level terminology. It is adviseable to
  globally search for all references of "brand" and replace as needed to a more
  specific word.

### Onboarding A New AMU Product

1. _k8sapp_ui_template_ Find and replace all references of the template repository name and replace with the real product's name.
2. _amuproduct_ Find and replace all references of **BOTH** (turn on match capitalization filter) "amuproduct" and "AmuProduct" with the real product's name, making sure to match the case.
3. OPTIONAL: _:3000_ Find and replace all default port numbers for app with unique one. _IE: 3001_
4. _AMUPRODUCT_ Find and replace all references of this with the real JIRA project key.
5. _TODO-ONBOARDING:_ Review all instances of this and follow the TODO instructions for the new product. If there is significant effort involved, change the TODO-SPECIFIC: label so it can be addressed later on. \_NOTE: Remove the TODO\'s as you complete them
6. _DOTENV:_ Review the dotenv variables across all environments to ensure they are properly valued.
7. Once all is finished, run the **preflight** command which executes all setup scripts,
   tests, linting, etc. to ensure that everything works correctly without errors: `yarn preflight`
8. Upgrade and update nvmrc (Node version) and all other dependencies/packages that are used out of the box within the project.

## Related links

- Deploy Environments
  - [Development](https://development.appname.com/)
  - [Staging](https://staging.appname.com/)
  - [Production](https://www.appname.com/)
- Swagger docs for AppName Service
  - [Development](https://development.service.appname.com/swagger/index.html)
  - [Staging](https://staging.service.appname.com/swagger/index.html)
  - [Production](https://service.appname.com/swagger/index.html)
- Strapi CMS Login
  - [Staging](https://staging.appname-cms.amuniversal.com/admin/auth/login)
  - [Production](https://appname-cms.amuniversal.com/admin/auth/login)
- [Storybook](https://www.chromatic.com/library?appId=TODO-ONBOARDING:input-storybook-instance)
- [Jira Project](https://amuniversal.atlassian.net/browse/TODO-ONBOARDING:input-jira-instance)
- [Confluence Space](https://amuniversal.atlassian.net/l/c/TODO-ONBOARDING:input-confluence-space)
- [Sharepoint Group](https://amutechnology.sharepoint.com/sites/TODO-ONBOARDING:sharepoint-group)
- [Sentry Error Reporting](https://sentry.io/organizations/andrews-mcmeel-universal/issues/?project=TODO-ONBOARDING:input-sentry-project-id)

---

## Getting Started

```bash
git clone https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template
```

### Prerequisites

You will need:

- An OS package manager
  - MacOS: [Homebrew](https://brew.sh/)
  - Windows: [Chocolatey](https://chocolatey.org/install)
- [Docker](https://www.docker.com/)
  - MacOS: `brew cask install docker`
  - Windows: `choco install docker-desktop`
- [Powershell](https://docs.microsoft.com/en-us/powershell)
  - MacOS: `brew install --cask powershell`
  - Windows: `choco install powershell-core`

More notes on other helpful tools you can use in this project, here: [Basic Workstation Setup](https://amuniversal.atlassian.net/wiki/spaces/DEVOps/pages/3114369037/Basic+Workstation+Setup)

---

## Local Development

We use Docker compose to build this project. You can read up more on some tips on how to use Docker, here: <https://amuniversal.atlassian.net/wiki/spaces/DEVOps/pages/3399024641/Tips+for+Using+Docker>

To start the service locally:

1. Install dependencies and retrieve the `.env` file by running: `yarn setup`
   > _OPTIONAL:_ Append this command with the environment of your choosing: `yarn setup staging` This will retrieve all the staging secrets and override what is currently in your .env file.
1. Start app for development, `yarn dev`, or start app for production, `yarn build && yarn start`
1. Open app in browser: <http://localhost:3000>
1. Run Jest tests: `yarn test:unit`

---

## Environment Variables

The environment variables for this project are sourced from Azure Key Vault Secrets.

By default, the `.env` file is what is read for local development. You can specify different .env files in the `docker-compose.yaml` file (example: `.env.development` or `.env.test`).

Next.js has [built-in support](https://nextjs.org/docs/basic-features/environment-variables) for environment variables. It will automatically load variables from one of the following files for the matching Node environment, which are used to set default values for **non-sensitive** information:

```
.env.development
.env.test
.env.production
```

These variables can be overridden with `.local` versions of those files, such as `.env.development.local`. Local versions should not be checked into source control, and are in our `.gitignore`. We similarly ignore `.env` as a convention, preferring to use more specific files for storing environment variables.

### Retrieving Secrets

You can use the Yarn scripts provided by the `package.json` file:

- Runs `yarn install` and generates the `.env` file. Optionally, you can specify the environment for the first argument (defaults to the development environment).

  ```bash
  yarn setup [ENVIRONMENT]
  ```
- Generates the `.env` file. Optionally, you can specify the environment for the first argument (defaults to the development environment).

  ```bash
  yarn keys:get [ENVIRONMENT]
  ```

You can also call the Azure Key Vault scripts directly like so:

- Generates the `.env` file. To specify an environment, use the `-Environment` option (defaults to the development environment).

  ```PowerShell
  Get-Secrets.ps1 -Environment [ENVIRONMENT]
  ```

- Generates the `.env` file. To specify an environment, use the `-KeyVaultName` option.

  ```PowerShell
  Get-Secrets.ps1 -KeyVaultName [KEY VAULT NAME]
  ```

More information on how to use environment variables and how to edit them in an application, here: [Application Environment Variables](https://amuniversal.atlassian.net/wiki/spaces/DEVOps/pages/2796191745/Application+Environment+Variables)

### Azure Key Vault Names

Here are the available Azure Key Vault names for this project:

```
appname-development
appname-staging
appname-production
```

---

## Next.js Essentials

This app is built with Next.js and is Server Side Rendered (SSR). There are many important concepts to keep in mind when working in Next.js:

- [Routing](https://nextjs.org/docs/routing/introduction)
- [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)
- [Pages](https://nextjs.org/docs/basic-features/pages)
- [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)
- [API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Dynamic Import](https://nextjs.org/docs/advanced-features/dynamic-import)
- [Image Component](https://nextjs.org/docs/api-reference/next/image)

### Updating the Node Version

Whenever we update our Node version, it needs to be updated to the same version within both the `Dockerfile` and `.nvmrc`. Typically the `Dockerfile`'s Node version is updated by [Dependabot](https://app.dependabot.com/accounts/Andrews-McMeel-Universal). When a pull request is created, pull down the branch, and update the listed versionin `.nvmrc` to match it.

### Next Image

Whenever possible, we should render images using the Next.js Image component over the img HTML element. The Next image API performs a number of optimizations to an image file before ultimately returning an img element to the client. Such optimizations are done at request time (rather than at build time) and the optimized image is cached in the project files (.next/cache/...) to be served immediately upon similar requests.

Other features:

- Optimized file extension (webp when possible)
- Smart image quality reduction
- Image placeholder to prevent cumulative layout shift
- Lazy loading
- Automatic srcSet

Common use cases:

- Original image size (unresponsive):

```
<Image
  src={src}
  alt={alt}
  width={width}
  height={height}
/>
```

- Original image size (responsive):

```
<Image
  src={src}
  alt={alt}
  width={width}
  height={height}
  layout="responsive"
/>
```

- Dev defined size (responsive): `// if aspect ratio differs from original image, use objectFit to avoid distortion`

```
<Image
  src={src}
  alt={alt}
  width="anyNumber"
  height="anyNumber"
  layout="responsive"
  objectFit="cover"
/>
```

- Background image: `// just an example, will likely need to be tweaked for each use case`

```
<div style={{ “position”: “fixed”,  “height”: “100vh”, “width”: “100vw”, “overflow”: “hidden” }}>
  <Image
    src={url}
    alt={alt}
    layout=”fill”
    objectFit=”cover”
    // objectPosition=”right top”
    // quality=”100”
  />
</div>
```

---

## General Development Guidelines

We follow the [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react) with few deviations, and ESLint is configured to use their rules. A few basic guidelines that the linter won't catch and are worth mentioning:

- Filenames and component names should match, and should likewise be imported with the same name
  - Higher Order Components are prefixed with "with": `with[HOC].jsx`
  - Custom hooks are prefixed with "use": `use[Hook].jsx`
- Root components of a directory should be named `index.jsx` and imported with the directory name
  - The only exception to this is for pages, see Next.js Essentials above
  - `index.jsx` should only contain a single `import` and `export`.
- 1 component per file
- Functions and variables belong within the component
  - If the function/variable should be separate, extract that function into a helper file
- 1 CSS Module per component directory
  - If there's a need for shared styles across a parent directory, like `/buttons`, create an `scss` directory for those modules and prefix their names with an underscore and the parent directory's name. For instance: `/buttons/scss/_buttonsMixins.module.scss`
- Prefer absolute paths over relative paths, unless importing a sibling CSS Module or component for testing
- Props should always use destructuring, and should rarely be an Object
- Prefer using `async`/`await` over `Promise`

---

## Component Structure

### Common Components

**Responsibilities**

- Render content
- Handle limited presentation logic
- Usable in any component

**Guidelines**

- Can render Common components
- Can import SCSS modules
- Can accept functions passed as props
- Cannot define business logic
- Cannot handle client-side API interactions
- Cannot have outer margin or otherwise influence sibling/parent components

### Module Components

**Responsibilities**

- Handle business logic
- Hydrate nested components with props
- Define nested component layout

**Guidelines**

- Can render Module Child components and Common components
- Can be rendered in multiple Section components
- Can import SCSS modules
- Should handle all client-side API interactions
- Should attempt to handle all Module and Module Child business logic
- Cannot have outer margin or otherwise influence sibling/parent components

### Module-Child Components

**Responsibilities**

- Render content
- Handle limited presentation logic
- Break Module down into smaller pieces to improve readability and testability

**Guidelines**

- Can render sibling Module Child components and Common components
- Can import SCSS modules
- Can accept functions passed as props
- Cannot handle client-side API interactions
- Cannot be rendered in multiple Module components
- Cannot have outer margin or otherwise influence sibling/parent components

### Sections

**Responsibilities**

- Hydrate nested components with page props
- Define nested component layout

**Guidelines**

- Can render Module components and Common components only
- Can import SCSS modules for layout only
- Can handle business logic to conditionally display nested components
- Can handle business logic to update props shared between multiple nested components

### Pages

**Responsibilities**

- Hydrate Section components with server-side and static props
- Define page template

**Guidelines**

- Can render Section components only
- Can handle business logic to conditionally display Section components
- Cannot import SCSS modules

### PropTypes

All components use [PropTypes](https://github.com/facebook/prop-types) to check and document required and optional props. The most stringent prop checking is done at the component level, while containers and pages are allowed more flexibility to account for managing payloads from API requests.

Additionally, add descriptive documentation to each PropType, which will be picked up by Storybook and used in the "Docs" tab.

```javascript
DemoComponent.propTypes = {
  /** DemoComponent contents. */
  children: PropTypes.node,
};
```

### Hooks and Functional Components

As a rule of thumb, we write functional components (using arrow functions) over class components. This is because functional components are easier to read, and because we prefer using [Hooks](https://reactjs.org/docs/hooks-intro.html) over [Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) methods.

Our ESLint config is set up to validate hooks, including `useEffect` dependency arrays. Before disabling a warning because you believe something doesn't belong in deps, read through [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) and try to find another solution. It's OK to disable a linter if you have good reason (leave a comment explaining why if that reason isn't immediately obvious), but that particular rule should be disabled as a last resort.

Custom hooks directory: `src/helpers/hooks`

### State Management

Our preferred way to manage global state is with [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) and [React Context](https://reactjs.org/docs/context.html). Always set up separate Contexts to handle `state` and `dispatch`, because when those values are updated, it will trigger a rerender in any components consuming that data, and we can be more specific about whether a component needs `state`, `dispatch`, or both.

Global state should be used for managing data that is needed app-wide, whereas non-global or presentational state belongs within the container or component.

For global state wrap the app component in a Context provider, for state scoped to multiple components wrap the container in a Context provider, and for state scoped to a single component prefer the `useState` or `useReducer` hooks.

Contexts are kept in `src/contexts`.

- Reference: <https://kentcdodds.com/blog/how-to-use-react-context-effectively>
- Reference: <https://www.robinwieruch.de/react-state-usereducer-usestate-usecontext>
- Reference: <https://hswolff.com/blog/how-to-usecontext-with-usereducer/>

### Styling

Wherever possible we prefer to style components with SCSS instead of inline styles or any flavor of CSS-in-JS. We make heavy use of Flexbox and media queries for responsive designs, which helps enforce a separation of concerns between content and style.

Additionally, we use the [classnames package](https://github.com/JedWatson/classnames) to assist in applying styles within the JSX components.

#### SCSS Modules

We use SCSS Modules to style components. SCSS Modules are CSS Modules, but with all the power of SCSS (nesting, variables, etc). SCSS Modules scope styles to just that component, as opposed to making them globally available.

When global styles are needed, import them in `src/scss/index.scss`

SCSS variables can be exported for use in Components. These variables are compiled and thus are not dynamic, but are useful when a static value is needed. Always prefix SCSS variables with `var_` and use camelCase for easy identification. Note that exported variables are strings.

```scss
// fileName.module.scss
:export {
  var_navHeight: 84px;
  var_burgerSize: $burger-size;
  var_gridBreakpointXS: map-get($grid-breakpoints, "xs");
  var_gridBreakpointSM: map-get($grid-breakpoints, "sm");
  var_gridBreakpointMD: map-get($grid-breakpoints, "md");
  var_gridBreakpointLG: map-get($grid-breakpoints, "lg");
  var_gridBreakpointXL: map-get($grid-breakpoints, "xl");
  var_gridBreakpointXXL: map-get($grid-breakpoints, "xxl");
}
```

```js
// ComponentName.jsx or file.js
const navHeight = styles.var_navHeight;
const burgerSize = styles.var_burgerSize;
const breakpointXS = styles.var_gridBreakpointXS;
const breakpointSM = styles.var_gridBreakpointSM;
const breakpointMD = styles.var_gridBreakpointMD;
const breakpointLG = styles.var_gridBreakpointLG;
const breakpointXL = styles.var_gridBreakpointXL;
const breakpointXXL = styles.var_gridBreakpointXXL;
```

- Reference: <https://medium.com/clover-platform-blog/modular-scss-and-why-you-need-it-6bb2d8c40fd8>
- Reference: <https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css>
- Reference: <https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet>

#### CSS Variables (TODO)

Next.js has limited support for CSS Variables, we are currently exploring options on whether or not we can use them, and if so, how best to use them. In the meantime, use SCSS variables or modify style properties directly with JS.

#### Fonts

This project integrates with typekit to utilize specific fonts in the project. [Here](https://fonts.adobe.com/fonts/work-sans) is where you can go to view the default font face selected.

#### BEM

[BEM](http://getbem.com/naming/) is our preferred naming convention, which is slightly modified for convenience. This allows us to more easily access classes within JSX, like `styles.blockName` instead of `styles['block-name']`.

```scss
// Original BEM
.block-name
.block-name--modifier-name
.block-name__element-name
.block-name__element-name--modifier-name

// AMU BEM, uses camelCase and replaces -- with _
.blockName
.blockName_modifierName
.blockName__elementName
.blockName__elementName_modifierName
```

Despite using SCSS Modules and not having to worry about global scope, BEM is still useful for conveying intent and context for a given module's classes.

#### Bootstrap

This project uses [Bootstrap v5](https://v5.getbootstrap.com/docs/5.0/getting-started/introduction/) as a styling toolkit. We make heavy use of their mixins and utilties, especially their [breakpoint mixins](https://v5.getbootstrap.com/docs/5.0/layout/breakpoints/#media-queries) and variables from the custom Bootstrap theme.

We do not style Bootstrap's classes directly, if a Bootstrap class needs to be modified instead customize the theme file's variables. If that is not sufficient, style like normal within the appropriate SCSS module.

Please note that while Bootstrap v5 does offer vanilla JavaScript to provide functionality for components like dropdowns, we don't expect a need for that and are only using Bootstrap as a styling framework.

Import Bootstrap partials for global use: `src/scss/index.scss`

Custom theme file: `src/scss/_custom.scss`

---

## Testing

Test files should be stored in the same location as the original file they are testing, with the exception of Playwright tests (see below).

Run tests with: `yarn test`

We run tests automatically with GitHub Actions on every Pull Request, failing tests will need to be addressed before a PR can be merged.

### Jest

We use [Jest](https://jestjs.io/en/) for unit tests and [snapshot tests](https://jestjs.io/docs/en/snapshot-testing). To update a snapshot, run `yarn test -u`. Snapshots should only be updated when the component was purposefully modified, not simply because the tests are failing.

For more information about working with Jest, this is a [friendly and useful guide](https://flaviocopes.com/jest).

### React Testing Library

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro) covers component tests in way more like how a user would interact with the component. We use `data-testid` within components as a convenient method for identifying DOM elements with React Testing Library.

Debugging Tools:

- The [screen](https://testing-library.com/docs/queries/about/#screen) object allows us to interact with the component we have rendered and find elements. Screen provides a [debug](https://testing-library.com/docs/queries/about/#screendebug) method that will print the document or specified elements.
- Screen provides another method called [logTestingPlaygroundURL](https://testing-library.com/docs/queries/about/#screenlogtestingplaygroundurl). This method will print a url in your terminal for you to copy and paste in your browser where you can further test the entire document or an element.
- Commonly used screen methods:
  - Reference: [Screen Methods Table](https://testing-library.com/docs/queries/about/#types-of-queries)
  - GET - Used most of the time
  - FIND - Only method that can be used asynchronously
  - QUERY - won’t throw an error but will instead return null. Good for testing the lack of existence of an element. You can assert that it returns null to confirm an element does not exist thus passing the test.

### Playwright

We use [Playwright](https://playwright.dev/) as our end-to-end testing framework. We also use `data-testid` in these tests for targeting. All Playwright tests are contained in `playwright` directory as `.spec.js` files.

Playwright tests can be run with `yarn test:integration`

- Reference: <https://playwright.dev/docs/writing-tests>
- It is recommended, but not mandatory, to also download the VSCode extension for Playwright for easier debugging <https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright>

---

## Storybook

We use [Storybook](https://storybook.js.org/) for component documentation and style guides. Global components should each have stories, while namespaced or container components can have stories if needed.

Storybook can be built as a static app by running `yarn storybook:build` and run locally with `yarn storybook:run`.

### Addons

Along with all the great features that storybook brings out of the box, we employ several addons to maximize efficiency, quality, and speed. Below are bullets outlining which addons we use and why:

1. [Accessibility](https://github.com/storybookjs/storybook/tree/master/addons/a11y)

   - Utilizing a11y accessibility checking, this helps us identify accessibility
     errors early on before maturing a component.

2. [Dark Mode](https://github.com/hipstersmoothie/storybook-dark-mode) - This
   allows for the main storybook UI to be viewed in dark mode or any other
   color which helps with branding.

3. [Grid](https://storybook.js.org/addons/storybook-addon-grid/) - This control
   allows for an overlay of our grid. Set to specific spacing, gutter, and
   maximum values
4. [Controls](https://storybook.js.org/addons/@storybook/addon-controls/) - This
   allows for the ability to interact with component inputs dynamically in the
   Storybook UI
5. [Controls](https://storybook.js.org/addons/@storybook/addon-controls/) - This
   allows for the ability to interact with component inputs dynamically in the Storybook UI

---

## Sentry

[Sentry](https://docs.sentry.io/) is our error reporting tool for this UI. It is configured to log both client and server-side errors, and only runs in a production environment. Sentry will automatically log most errors, but as a best practice we manually capture exceptions in places where logging is more important. When doing so, you only need to import the `@sentry/nextjs` package. There is a `sentry.client.js` and `sentry.server.js` which are responsible for both sides of our application. All 500 errors should be captured and upon the product owner's request, all 404 errors should also be captured.

To capture an exception:

```js
import * as Sentry from "@sentry/nextjs";

// send an error returned from something else
Sentry.captureException(error);

// or send a new error
Sentry.captureException(new Error(`this is broken`));
```

---

## Programmatic Advertising Implementation (Vendor: Freestar)

The general process is as follows:

We use the freestar npm package for SPA integration
[https://www.npmjs.com/package/@freestar/pubfig-adslot-react-component](https://www.npmjs.com/package/@freestar/pubfig-adslot-react-component). There is an admin for this application's instance of ads located [here](https://dashboard.freestar.io/dashboard). To gain access, you will need to ask our Advertising Operations department.

### Implementation Details

1. The rendering of ads consists of two components:
2. **An advertising wrapper** - This is used for styles and a parent container
   for each ad.
3. **The advertising unit** - A stateless advertising component that only
   requires three values to properly render and refresh the ad.
   - publisher - This is the product's "ID", assigned by freestar.
   - placementName - This is the constructed ad unit name which is made up of
     four data points. IE:
     ${advertisingPublisher}_${advertisingType}_${advertisingPosition}_${advertisingIndex}
4. **Ad Refreshing** - All advertising units automatically will wait for render
   until the user has the unit in view. All subsequent refreshes on our units
   also happen behind the scenes, thanks to the Freestar npm package.
5. **Reporting and Tracking** - There is a trackPageview function that fires within
   \_app.jsx. This is only needed for reporting purposes. The ad "pageviews"
   should closely match our GA pageviews.

#### Testing and Debugging

To enable freestar's debug mode, you will need to pass a query string parameter. IE: ?freestar=true

### Customer Support Integration (Zendesk)

#### Support Link Creation

Within
[/src/helpers/utils/generateSupportUrl.js](https://github.com/Andrews-McMeel-Universal/appname/blob/staging/src/helpers/utils/generateSupportUrl.js) we have created a helper to generate any links that navigate to our support knowledge base. The following data is appended using query string parameters:

1. ticket_form_id - This is the ID of the AmuProduct Form in Zendesk.
2. associated_url - The current relative URL of the user before navigating to customer support.
3. user_email - The current email being used by the user
4. user_id - The current GUID or email address being used by the user
5. membership_level - The current membership_level of the user. IE: Subscribed, Cancelled, Expired, Registered, and Guest
6. device_type - The current device type being used by the user
7. operating_system - The current operating_system being used by the user
8. browser - The current browser being used by the user
9. affects_versions - The current Release Version of the application. See [Releases](https://github.com/Andrews-McMeel-Universal/appname/releases)

_An example of this URL in practice is the help link under \_My Account_:\_

```
https://support.amuproduct.com/hc/en-us/?ticket_form_id=TODO-ONBOARDING:Fill-in-form-id&associated_url=%2Fmy-account&user_email=flastname%40amuniversal.com&user_id=flastname%40amuniversal.com&membership_level=Registered&device_type=Desktop&operating_system=Mac%20OS&browser=Chrome&affects_versions=0.8.0
```

#### Zendesk Support Form

Within [this brand template](https://support.amuproduct.com/theming/editor/1a810449-4827-41a8-bba3-aa630f8751e9) (Password Credentials are in 1password) in the [zendesk admin](https://universaluclick.zendesk.com/agent/admin/overview), we have some logic in the: 1.[header.hbs](https://support.amuproduct.com/theming/editor/1a810449-4827-41a8-bba3-aa630f8751e9/templates/header.hbs)

- Saves the parameters into local storage values for the user. 2.[new_request_page.hbs](https://support.amuproduct.com/theming/editor/1a810449-4827-41a8-bba3-aa630f8751e9/templates/new_request_page.hbs)
  - This logic retrieves the local storage values and injects them into the fields, then hides them from the user.

#### Jira Ingestion

If customer support deems the user's request as important enough, they can use all this information to generate a JIRA Issue. All the fields gets passed in so the producer can further groom the issue. Within the sidebar of any ticket in JIRA, you'll have access to this information on the Zendesk side.

#### Sitemap and Robots.txt generation

We use a package called [next-sitemap](https://www.npmjs.com/package/next-sitemap#installation) for which is responsible for generating our sitemap(s) and robots.txt file. In our package.json file, a postbuild command generates both of these **after** the application has been built.

##### How it is configured

During the "docker:build" command, you will notice that the following gets executed.

```javascript
yarn postbuild
```

Upon execution, the root folder contains a configuration file called next-sitemap.js. This file serves as a base configuration and generates all site URLs except the paths to each brand. Due to the dynamic categories and dynamic items underneath, we needed to create some logic that iterates over these brand slugs and generates an additional sitemap. The logic for this is contained in a folder called _"dynamic-sitemap.xml"_ Within the index.js file, we use

```javascript
getServerSideProps;
```

---

## Deployments & Releases

Detailed information about how to prepare an app to deploy to K8s is here: (<https://amuniversal.atlassian.net/l/c/AV1H0Sbf>)

### Semantic Versioning

Within this application, there are files that need to be updated to denote what the current version is. These values should always match each other:

- `/package.json` (update `version`)
- `/deployments/development-charts/Chart.yaml` (update `appVersion`)
- `/deployments/staging-charts/Chart.yaml` (update `appVersion`)
- `/deployments/production-charts/Chart.yaml` (update `appVersion`)

You can use the `bump-versions.yml` workflow to automatically increment the version number in any related files. To run the workflow:

1. Go to the Actions tab in this repository.
1. Select the "Bump Versions" action on the left hand side
1. On the right side on the "Bump Versions" action page, click "Run workflow" and specify how you would want to increment the version number.
1. Click "Run workflow".

This will create a PR with the changes that should already be approved.

> NOTE: We do not use the vx.x.x pattern for version naming. We simply have the semantic release version number like this: x.x.x

### Deploying to Staging

Once approved and an AMU software engineer has merged this pull request in, the following will happen within our CI.

1. Your branch will be merged into staging and a staging AKS deploy will occur
2. All jira tickets you have included in the branch names or commits will have their statuses automatically updated to **In QA Review**. This communicates to the product owner that it is QA testing.
3. Once the product owner has reviewed these issues and marked each of their statuses as **Approved**, we will begin preparing a production release.

### Deploying to Production

Jira Release: <https://amuniversal.atlassian.net/projects/PUZSOC?selectedItem=com.atlassian.jira.jira-projects-plugin%3Arelease-page>

Once a pull request is merged into _main_, it passes all CI checks and passes QA, it will be ready for being released to production.

> The AMU software engineer **must** create a tagged version.

1. The AMU software engineer will take note of the `./deployments/charts/Chart.yaml` version in this repo's main branch.
1. They will update the necessary files (see "Semantic Versioning") and JIRA release to that version.
1. Navigate to the [Releases](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/releases) tab
1. Click the button for "Draft a New Release" and then .
1. Click "Choose a tag" and enter in the version that you updated in the files in the "Semantic Versioning" step above.
1. Enter in the same version number for the "Release Title"
1. Click "Generate Release Notes"
1. Make sure "Set as the latest release" is set
1. Click "Publish release", which will initiate a deploy.

> NOTE: We do not use the vx.x.x pattern for version naming. We simply have the semantic release version number like this: x.x.x
