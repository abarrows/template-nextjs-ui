// @ts-check

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './playwright',
  /* Maximum time one test can run for. */
  timeout: 60 * 1000,
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
  reporter: process.env.CI
    ? [
        ['list'],
        [
          'html',
          {
            open:
              process.env.NODE_ENV === 'development' ? 'on-failure' : 'never',
            outputFolder: 'coverage/e2e',
          },
        ],
        ['playwright-ctrf-json-reporter'],
        ['github'],
      ]
    : [['list']],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://127.0.0.1:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: process.env.CI ? 'on-first-retry' : 'retain-on-failure',
    /* Screenshot on failure */
    screenshot: 'only-on-failure',
    /* Video on retry */
    video: process.env.CI ? 'retain-on-failure' : 'off',
    /* Viewport size */
    viewport: { width: 1280, height: 720 },
    /* Emulate browser locale and timezone */
    locale: 'en-US',
    timezoneId: 'America/Chicago',
    /* Permissions */
    permissions: [],
    /* Ignore HTTPS errors during navigation */
    ignoreHTTPSErrors: true,
  },

  /* Run your local dev server before starting the tests */
  webServer: {
    // CI: build already done, just start server
    // Local: build and start
    command: !process.env.CI
      ? 'npm run start'
      : 'npm run build && npm run start',
    timeout: 120 * 1000,
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        // Modern Chrome features
        channel: 'chrome',
      },
    },
    // Uncomment to test on Firefox and Safari
    // {
    //   name: 'firefox',
    //   use: {
    //     browserName: 'firefox',
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: {
    //     browserName: 'webkit',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'coverage/e2e',

  /* Global setup/teardown */
  // globalSetup: require.resolve('./playwright/global-setup'),
  // globalTeardown: require.resolve('./playwright/global-teardown'),
};

module.exports = config;
