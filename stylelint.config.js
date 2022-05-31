/* eslint-disable max-len */
module.exports = {
  extends: [
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
  plugins: ['stylelint-no-unsupported-browser-features'],
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
      '^((?!js-).)*$',
      {
        resolveNestedSelectors: true,
        severity: 'error',
        message:
          "Don't style js- prefixed classes, those are reserved for JavaScript use only",
      },
    ],
    'selector-pseudo-element-colon-notation': 'single',
    'selector-max-id': 0,
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
    'scss/at-import-partial-extension-whitelist': ['module'],

    // TODO: revisit these rules and enable/customize **one at a time**
    // they were introduced during version upgrades and affect many files
    'comment-empty-line-before': null,
    'custom-property-pattern': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-empty-line-before': null,
    'rule-empty-line-before': null,
    'scss/at-import-partial-extension': null,
    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-pattern': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/no-global-function-names': null,

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
  },
};
