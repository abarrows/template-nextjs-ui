import { defineConfig, devices } from '@playwright/test';

// Environment variables are loaded by dotenv-cli in npm scripts
// via: cross-env dotenv -e .env.test -- playwright test
// Get port from environment or default to 8000

/**
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './src',
  testMatch: '**/*.spec.{ts,tsx}',
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? '50%' : undefined,

  /* Shard tests across CI matrix jobs for speed */
  shard:
    process.env.SHARD_INDEX && process.env.SHARD_TOTAL
      ? {
          current: parseInt(process.env.SHARD_INDEX, 10),
          total: parseInt(process.env.SHARD_TOTAL, 10),
        }
      : undefined,

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI
    ? [
        ['html'],
        ['json', { outputFile: 'coverage/e2e/results.json' }],
        ['junit', { outputFile: 'coverage/e2e/junit.xml' }],
      ]
    : [['html'], ['list']],

  /* Shared settings for all the projects below */
  use: {
    /* Base URL to use in actions like `await page.goto('/')` */
    baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test */
    trace: process.env.CI ? 'retain-on-failure' : 'on-first-retry',

    /* Screenshot on failure */
    screenshot: 'only-on-failure',

    /* Video on retry */
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true, // or false, doesn't matter for viewport
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],

  // Uncomment for cross-browser testing
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },
  //   /* Test against mobile viewports */
  //   {
  //     name: 'Mobile Chrome',
  //     use: { ...devices['Pixel 5'] },
  //   },
  //   {
  //     name: 'Mobile Safari',
  //     use: { ...devices['iPhone 12'] },
  //   },
  // ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: process.env.CI
      ? 'cross-env dotenv -e .env.test npm run build && cross-env dotenv -e .env.test npm run preview'
      : 'cross-env dotenv -e .env.test npm run start:mock:static', // MSW intercepts network calls
    url: 'http://127.0.0.1:3000',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
