// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// used for __tests__/testing-library.js
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// -----------------------------------------------------------------------------
// Reset JSDOM between tests
// https://github.com/facebook/jest/issues/1224#issuecomment-716075260
const sideEffects = {
  document: {
    addEventListener: {
      fn: document.addEventListener,
      refs: [],
    },
    keys: Object.keys(document),
  },
  window: {
    addEventListener: {
      fn: window.addEventListener,
      refs: [],
    },
    keys: Object.keys(window),
  },
};

// Lifecycle Hooks
beforeAll(async () => {
  // Spy addEventListener
  ['document', 'window'].forEach((obj) => {
    const { fn } = sideEffects[obj].addEventListener;
    const { refs } = sideEffects[obj].addEventListener;

    function addEventListenerSpy(type, listener, options) {
      // Store listener reference so it can be removed during reset
      refs.push({ type, listener, options });
      // Call original window.addEventListener
      fn(type, listener, options);
    }

    // Add to default key array to prevent removal during reset
    sideEffects[obj].keys.push('addEventListener');

    // Replace addEventListener with mock
    global[obj].addEventListener = addEventListenerSpy;
  });
});

// Reset JSDOM. This attempts to remove side effects from tests, however it does
// not reset all changes made to globals like the the window and document
// objects. Tests requiring a full JSDOM reset should be stored in separate
// files, which is only way to do a complete reset of JSDOM with Jest.
beforeEach(async () => {
  const rootElement = document.documentElement;

  // Remove attributes on root element
  [...rootElement.attributes].forEach((attribute) =>
    rootElement.removeAttribute(attribute.name)
  );

  // Remove elements (faster the setting innerHTML)
  while (rootElement.firstChild) {
    rootElement.removeChild(rootElement.firstChild);
  }

  // Remove global listeners and keys
  ['document', 'window'].forEach((obj) => {
    const { refs } = sideEffects[obj].addEventListener;

    // Listeners
    while (refs.length) {
      const { type, listener, options } = refs.pop();
      global[obj].removeEventListener(type, listener, options);
    }

    // Keys
    Object.keys(global[obj])
      .filter((key) => !sideEffects[obj].keys.includes(key))
      .forEach((key) => {
        delete global[obj][key];
      });
  });

  // Restore base elements
  rootElement.innerHTML = '<html><head></head><body></body></html>';
});
// -----------------------------------------------------------------------------
