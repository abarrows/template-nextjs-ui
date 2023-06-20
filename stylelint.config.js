// BEM Demo: https://regexr.com/7epma
const bemRegex =
  /^([a-z]+[0-9]*)([A-Z][a-z0-9]+)*(?:__([a-z0-9]+)([A-Z][a-z0-9]*)*){0,1}(_([a-z0-9]+)([A-Z][a-z0-9]*)*){0,1}$/;
const kebabCaseRegex = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/;

module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
  ],
  ignoreFiles: ['**/*.js', '**/*_design-tokens.scss'],
  plugins: [
    'stylelint-no-unsupported-browser-features',
    'stylelint-a11y',
    'stylelint-color-format',
  ],
  rules: {
    // Standard rules
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
    'comment-empty-line-before': 'never',
    'custom-property-no-missing-var-function': true,
    'custom-property-pattern': kebabCaseRegex,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-empty-line-before': 'never',
    'declaration-no-important': [
      true,
      {
        message: 'Avoid usage of !important',
        severity: 'warning',
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreSelectors: [':export'],
      },
    ],
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment'],
        ignore: ['first-nested'],
      },
    ],
    'selector-class-pattern': [
      bemRegex,
      {
        resolveNestedSelectors: true,
        severity: 'warning',
        message:
          'Use AMU variant of BEM naming for class selectors: camelCase names and underscores instead of dashes. IE: .blockName_modifierName and .blockName__elementName',
      },
    ],
    'selector-max-id': 0,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'global', 'local', 'root'],
      },
    ],
    'selector-pseudo-element-colon-notation': 'single',
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,

    // Plugin rules
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
        ignore: ['css-gradients', 'multicolumn'],
      },
    ],

    // SCSS rules
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-import-partial-extension': 'always',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-pattern': kebabCaseRegex,
    'scss/dollar-variable-empty-line-before': 'never',
    'scss/dollar-variable-pattern': kebabCaseRegex,
    'scss/no-global-function-names': true,
  },
};
