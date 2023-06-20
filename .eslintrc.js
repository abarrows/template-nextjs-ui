module.exports = {
  root: true,
  plugins: ['babel', 'chai-friendly', 'react', 'jsx-a11y'],
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
    jquery: false,
  },
  rules: {
    'chai-friendly/no-unused-expressions': 2,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '{jest,.storybook,src/stories}/**/*',
          '**/*.{playwright,spec,stories,test}.js*',
          'jest.*.js',
          'playwright.*.js',
        ],
      },
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    // Remember to use the AMU consoleLogger(message, object) utility helper instead of console.log.
    // 'no-console': ['error'],
    'no-unused-expressions': 0,
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: true,
      },
    ],
    'react/sort-prop-types': [
      1,
      {
        callbacksLast: true,
        sortShapeProp: true,
      },
    ],
  },
  overrides: [
    {
      // Jest overrides
      files: ['./__tests__/**', '**.test.jsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      // Commons overrides
      files: ['./src/components/commons**'],
      rules: {
        'react/jsx-props-no-spreading': 'warn',
      },
    },
    {
      // Storybook overrides
      files: ['./src/stories/**', '**.stories.jsx', '**.stories_skip.jsx'],
      rules: {
        'max-len': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-unescaped-entities': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
