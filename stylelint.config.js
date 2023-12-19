// BEM Demo: https://regexr.com/7epma
// Need to discuss on false flags NavigationMobile.
const bemRegex =
  /^([a-z]+[0-9]*)([A-Z][a-z0-9]+)*(?:__([a-z0-9]+)([A-Z][a-z0-9]*)*){0,1}(_([a-z0-9]+)([A-Z][a-z0-9]*)*){0,1}$/;
// const bemRegex = '^([a-z][a-z0-9]*)((_|__|[A-Z])[a-z0-9]+)*$';
const kebabCaseRegex = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/;

module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: [
    'stylelint-no-unsupported-browser-features',
    'stylelint-color-format',
  ],
  // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules
  rules: {
    // Ignored rules that are not supported by stylelint v15
    'scss/dollar-variable-colon-space-after': null,
    'declaration-block-no-duplicate-properties': true,
    'declaration-no-important': [
      true,
      {
        message: 'Avoid usage of !important',
        severity: 'warning',
      },
    ],
    // plugin rules
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignorePartialSupport: true,
        severity: 'warning',
        ignore: [
          'css-gradients',
          'multicolumn',
          'css-nesting',
          'css-has',
          'css-when-else',
        ],
      },
    ],
    'at-rule-disallowed-list': [
      'extend',
      {
        severity: 'error',
        message: 'No @extend',
      },
    ],
    'color-format/format': {
      format: 'rgb',
    },
    'property-no-unknown': [
      true,
      {
        ignoreSelectors: [':export'],
      },
    ],
    'property-no-vendor-prefix': true,
    // Megalinter is not recognizing this stylelint v15 rule.
    'selector-anb-no-unmatchable': null,
    'selector-class-pattern': [
      bemRegex,
      {
        resolveNestedSelectors: true,
        severity: 'warning',
        message:
          'USE AMU variant of BEM naming for class selectors. Remember: Only underscores.  IE: .blockName_modifierName and .blockName__elementName',
      },
    ],
    'selector-pseudo-element-colon-notation': 'single',
    'selector-max-id': 0,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'global', 'local', 'root'],
      },
    ],
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
    'scss/load-no-partial-leading-underscore': true,
    // 'scss/at-import-partial-extension-whitelist': ['module'],

    // Front-end Consensus Agreed Rules
    // they were introduced during version upgrades and affect many files
    'comment-empty-line-before': 'never',
    'custom-property-no-missing-var-function': true,
    'custom-property-pattern': kebabCaseRegex,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-empty-line-before': 'never', // conflicts with prettier
    'rule-empty-line-before': [
      'always',
      { except: ['first-nested', 'after-single-line-comment'] },
    ], // conflicts with prettier
    'scss/at-import-partial-extension': 'never', // 'DISCUSS'
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-pattern': kebabCaseRegex,
    'scss/dollar-variable-empty-line-before': 'never',
    'scss/dollar-variable-pattern': kebabCaseRegex,
    'scss/double-slash-comment-empty-line-before': 'never', // conflicts with prettier

    'scss/no-global-function-names': true,
    'media-query-no-invalid': null,
  },
};
