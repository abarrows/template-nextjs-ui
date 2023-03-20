// camelCase Reference
// '([a-z]+[0-9]*)([A-Z][a-z0-9]+)*'
const bemRegex =
  /^([a-z]+[0-9]*)([A-Z][a-z0-9]+)*(?:__([a-z]+[0-9]*)([A-Z][a-z0-9]+)*)*(_([a-z]+[0-9]*)([A-Z][a-z0-9]+)*){0,1}$/;
const kebabCaseRegex = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/;

/* eslint-disable max-len */
module.exports = {
  extends: [
    'stylelint-a11y/recommended',
    'stylelint-config-recess-order',
    'stylelint-config-standard-scss',
    /**
     * Note: We previously used stylelint-config-prettier, but that package
     * removed scss rules in v9. stylelint-config-prettier-scss is a new
     * config that brings back the scss rules, but is _brand_ new. If we have
     * issues, switch back to the original package and reference the affected
     * rules here:
     * https://github.com/prettier/stylelint-config-prettier/pull/124/files#diff-bfe9874d239014961b1ae4e89875a6155667db834a410aaaa2ebe3cf89820556
     */
    'stylelint-config-prettier-scss',
  ],
  plugins: [
    'stylelint-color-format',
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    // standard rules
    // https://github.com/stylelint/stylelint/blob/main/docs/user-guide/rules/list.md
    'at-rule-disallowed-list': [
      'extend',
      {
        severity: 'error',
        message: 'No @extend',
      },
    ],
    'custom-property-pattern': kebabCaseRegex,
    'declaration-no-important': [
      true,
      {
        severity: 'warning',
        message: 'Avoid usage of !important',
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreSelectors: [':export'],
      },
    ],
    'property-no-vendor-prefix': true,
    'selector-class-pattern': [
      bemRegex,
      {
        message: 'Expected class selector to be BEM camelCase',
        resolveNestedSelectors: true,
      },
    ],
    'selector-max-id': 0,
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export'],
      },
    ],
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,

    // scss rules
    // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-import-partial-extension': 'always',
    'scss/at-import-partial-extension-whitelist': ['scss', 'module.scss'],
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-pattern': kebabCaseRegex,
    'scss/dollar-variable-pattern': kebabCaseRegex,

    // plugin rules
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
        ignore: [
          'css-gradients',
          'flexbox',
          'multicolumn',
          'user-select-none',
          'viewport-units',
        ],
      },
    ],
    'color-format/format': {
      format: 'rgb',
    },
  },
};
