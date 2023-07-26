// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000;

// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
const baseURL = `http://localhost:${PORT}`;

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './playwright',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Run tasks prior to starting tests, such as to generate mock sessions. */
  // globalSetup: require.resolve('./playwright.setup.js'),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL,
    browserName: 'chromium',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    launchOptions: {
      logger: {
        /* eslint-disable no-unused-vars */
        isEnabled: (name, severity) => name === 'browser',
        log: (name, severity, message, args) =>
          // eslint-disable-next-line no-console
          console.log(`${name} ${message}`),
        /* eslint-enable no-unused-vars */
      },
    },
    viewport: { width: 1280, height: 720 },
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    command: process.env.CI ? 'yarn start' : 'yarn build && yarn start',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: {
  //       ...devices['Desktop Chrome'],
  //     },
  //   },

  //   {
  //     name: 'firefox',
  //     use: {
  //       ...devices['Desktop Firefox'],
  //     },
  //   },

  //   {
  //     name: 'webkit',
  //     use: {
  //       ...devices['Desktop Safari'],
  //     },
  //   },

  //   /* Test against mobile viewports. */
  //   {
  //     name: 'Mobile Chrome',
  //     use: {
  //       ...devices['Pixel 5'],
  //     },
  //   },
  //   {
  //     name: 'Mobile Safari',
  //     use: {
  //       ...devices['iPhone 12'],
  //     },
  //   },
  // ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'coverage/integration',
};

module.exports = config;
