// ESLint Flat Config (v9+)
import tanstackQuery from '@tanstack/eslint-plugin-query';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import jsoncPlugin from 'eslint-plugin-jsonc';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import testingLibrary from 'eslint-plugin-testing-library';
import unusedImports from 'eslint-plugin-unused-imports';
import vitest from 'eslint-plugin-vitest';
import globals from 'globals';
import jsoncParser from 'jsonc-eslint-parser';

export default [
  {
    ignores: [
      'coverage/**/*',
      '**/**.bundle.js',
      '**/.cache',
      '.vscode/',
      'deployments',
      '**/build',
      '**/node_modules/**/*',
      '**/vendor',
      '**/playwright-static',
      '**/*.css',
      '**/*.svg',
      '**/*.stories.*',
      '**/*eslint.config.*',
      '**/vitest.setup.js',
      '**/types/api/**',
      '**/mocks/**swagger**',
      '**/mocks/handlers/handlers.js',
      '**/mocks/**json-server**',
      '.storybook/**',
      'public/mockServiceWorker.js',
      'prettier.config.js',
      'stylelint.config.js',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      import: importPlugin,
      vitest: vitest,
      react,
      'react-hooks': reactHooks,
      '@tanstack/query': tanstackQuery,
      'unused-imports': unusedImports,
      jest: jestPlugin,
      'testing-library': testingLibrary,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: true,
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      // ❌ Remove these spreads - they contain "extends"
      // ...typescriptEslint.configs.recommended.rules,
      // ...react.configs.recommended.rules,
      // ...reactHooks.configs.recommended.rules,
      // ...importPlugin.configs.recommended.rules,
      // ...jestPlugin.configs.recommended.rules,
      // ...vitest.configs.recommended.rules,
      // ...tanstackQuery.configs.recommended.rules,

      // ✅ Add rules manually instead
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        { allowExpressions: true },
      ],
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-shadow': [
        'warn',
        {
          ignoreTypeValueShadow: true,
          ignoreFunctionTypeParameterNameValueShadow: true,
          allow: ['event', 'error'],
        },
      ],

      // React rules
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
      'react/require-default-props': [
        'warn',
        {
          functions: 'defaultArguments',
          forbidDefaultForRequired: true,
        },
      ],
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/sort-prop-types': [
        'warn',
        {
          callbacksLast: true,
          sortShapeProp: true,
        },
      ],

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Import rules
      'import/no-unresolved': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
          js: 'never',
          jsx: 'never',
        },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/mocks/**',
            '**/testUtilities.tsx',
            '**/tools/**',
            '**/*.test.ts',
            '**/*.test.tsx',
            '**/*.test.js',
            '**/*.test.jsx',
            '**/vite.config.ts',
            '**@vitejs/*',
            '**/vitest.setup.js',
          ],
        },
      ],
      'import/prefer-default-export': 'off',

      // Vitest rules
      'vitest/expect-expect': 'error',
      'vitest/no-conditional-expect': 'error',
      'vitest/no-disabled-tests': 'warn',
      'vitest/no-focused-tests': 'error',
      'vitest/prefer-mock-promise-shorthand': 'error',

      // TanStack Query rules
      '@tanstack/query/exhaustive-deps': 'error',
      // '@tanstack/query/prefer-query-object-syntax': 'error',

      // General rules
      'no-console': 'warn',
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      'unused-imports/no-unused-imports': 'error',
      // TODO: Enable this back and fix all warnings.
      'unused-imports/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'linebreak-style': ['warn', 'unix'],
    },
  },

  // Test-specific overrides
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}', '**/__tests__/**'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // Add Vitest globals
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    rules: {
      'react/jsx-props-no-spreading': 'off',
      // Additional test-specific Vitest rules
      'vitest/no-conditional-in-test': 'error',
      'vitest/prefer-to-be-truthy': 'error',
      'vitest/prefer-to-be-falsy': 'error',
    },
  },

  // Stories overrides
  {
    files: ['**/*.stories.{js,jsx,ts,tsx}'],
    rules: {
      'max-len': 'off',
      'import/no-anonymous-default-export': 'off',
      'react/forbid-prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-props-no-spreading': 'off',
    },
  },

  // JSON config
  {
    files: ['**/*.json', '**/*.jsonc'],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsonc: jsoncPlugin,
    },
    rules: {
      'jsonc/sort-keys': 'error',
    },
  },
];
