// TODO: In nextjs 12 they switched from babel to swc HOWEVER, eslint has not
// caught up yet so the temporary work-around is to add requireConfigFile:
// false, to our eslint config.
module.exports = {
  root: true,
  plugins: [
    'babel',
    '@typescript-eslint',
    'chai-friendly',
    'jest',
    'import',
    'react',
    'jsx-a11y',
    'eslint-plugin-unused-imports',
  ],
  extends: [
    // ESLint recommended rules
    // TypeScript ESLint recommended rules
    // Airbnb style guide and React
    // 'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/csf',
    'plugin:storybook/csf-strict',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],

  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['next/babel'],
      caller: {
        // Eslint supports top level await when a parser for it is included. We enable the parser by default for Babel.
        supportsTopLevelAwait: true,
      },
    },
  },
  ignorePatterns: ['src/design-system-package/dist/**', '**/_design_tokens.js'],
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
    jquery: false,
  },
  rules: {
    '@next/next/no-img-element': 2,
    'max-len': [
      'warn',
      {
        code: 120,
        // This regex excludes only .svg files from max-length rule.
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: 'd="([\\s\\S]*?)"',
      },
    ],
    semi: 2,
    // https://nextjs.org/docs/api-reference/next/link
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
    'react/require-default-props': [
      1,
      {
        functions: 'defaultArguments',
        forbidDefaultForRequired: true,
      },
    ],
    'react/sort-prop-types': [
      1,
      {
        callbacksLast: true,
        sortShapeProp: true,
      },
    ],
    // Remember to use the APPLICATION_NAME consoleLogger(message, object) utility helper instead of console.log.
    'no-console': ['error'],
    'no-unused-vars': ['off'],

    // Require that any module used for application code is declared as a
    // `dependencies`
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': [
      'error',
      // globs allow using devDependencies in story and test files
      {
        devDependencies: [
          '{jest,.storybook,src/stories}/**/*',
          '**/*.{spec,stories,test}.js*',
          'jest.*.js',
          'webpack.config.js',
        ],
      },
    ],
    'require-await': 1,
    'unused-imports/no-unused-imports': 'error',
  },
  // Prevents no-sync await to the rules.
  // TODO: Work with team on this one for GC.
  overrides: [
    {
      // Jest overrides
      files: ['./__tests__/**', '**.test.{js,jsx,ts,tsx}'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      // Commons overrides
      files: ['**/components/commons/**'],
      rules: {
        'react/jsx-props-no-spreading': 'warn',
      },
    },
    {
      // Route overrides
      files: ['**/route.js'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },

    {
      // Storybook overrides
      files: ['**/*.stories.{js,jsx,ts,tsx}'],
      rules: {
        'max-len': 'off',
        'import/no-anonymous-default-export': 'off',
        'react/forbid-prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
  settings: {
    // eslint-plugin-jsx-a11y - Below, we map our react components to the
    // semantic html elements they render. This allows us to use the correct
    // a11y rules for each component.  REMEMBER: If we change a components name
    // or what it renders, we need to update this mapping.
    'jsx-a11y': {
      rules: {
        'anchor-ambiguous-text': 'on',
      },
      components: {
        InputField: 'input',
        Button: 'button',
        ButtonClose: 'button',
        ContentDivider: 'hr',
        DropdownToggle: 'button',
        Paragraph: 'p',
        Icon: 'svg',
        Image: 'img',
        List: 'ul',
        ListItem: 'li',
        UtilityNavigation: 'nav',
        PageNavigation: 'nav',
        AccountNavigation: 'nav',
        NavLink: 'button',
        HeaderDesktopLinks: 'ul',
        Footer: 'footer',
        NavigationDesktop: 'header',
        Header: 'header',
        ShowFeatureHeader: 'section',
        ShowFiveFavorites: 'section',
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
        // extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
      },
    },
    react: {
      version: 'detect',
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes,
      // e.g. `forbidExtraProps`.If this isn't set, any propTypes
      // wrapped in a function will be skipped.
      'forbidExtraProps',
      {
        property: 'freeze',
        object: 'Object',
      },
      {
        property: 'myFavoriteWrapper',
      },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      {
        name: 'Link',
        linkAttribute: 'to',
      },
    ],
  },
};
