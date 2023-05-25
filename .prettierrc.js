module.exports = {
  singleQuote: true,
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^src/pages/api/(.*)$',
    '^src/constants(.*)$',
    '^src/helpers/(.*)$',
    '^src/(contexts|store)/(.*)$',
    '^src/store/(.*)$',
    '^src/(components|page-templates)/(.*)$',
    '^src/(.*)$',
    '^(?!.*\\.module\\.scss)./(.*)$',
    '^../(.*)$',
    '^./(.*)module.scss$',
  ],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
};
