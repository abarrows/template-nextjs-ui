export const B2C = {
  // All times in seconds and use Azure's default values from:

  // https://learn.microsoft.com/en-us/azure/active-directory-b2c/configure-tokens?pivots=b2c-custom-policy#token-lifetime-behavior
  REFRESH_TOKEN_AGE: 14 * 24 * 60 * 60, // 14 days
  ID_TOKEN_AGE: 60 * 60, // 60 minutes
  PRODUCT_KEY: 'AMU',
  TENANT_NAME: 'amub2c',
  POLICY_PREFIX: 'B2C_1A',
  POLICY_NAME: 'SIGNINSIGNOUT_POLICIES',
};

// TODO: Add localhost to the constants file or figure out where to put it.
export const URLS = {
  TERMS_OF_SERVICE: 'https://www.APPLICATION_DOMAIN.com/terms-of-service',
  PRIVACY_POLICY: 'https://www.APPLICATION_DOMAIN.com/privacy-policy',
  SUPPORT: `https://support.APPLICATION_DOMAIN.com`, // TODO Update this with the real link once we hav it
};

export const APPLICATION = {
  NAME: 'Template UI',
  ID: 'UI',
};
