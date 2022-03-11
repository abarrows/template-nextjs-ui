// ***********************************************************
// This example support/index.jsx is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// https://docs.cypress.io/api/events/catalog-of-events#Uncaught-Exceptions
// eslint-disable-next-line consistent-return
Cypress.on('uncaught:exception', (err) => {
  // We expect a 3rd party library error related to GDPR
  // and don't want to fail the test so we return false.
  // Other errors will still be caught.
  if (err.stack.includes('privacy-mgmt.com')) {
    return false;
  }
});
