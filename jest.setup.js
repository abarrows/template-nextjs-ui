// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import { format } from 'util';

const { error } = global.console;

global.console.error = function throwError(...args) {
  error(...args);
  throw new Error(format(...args));
};
