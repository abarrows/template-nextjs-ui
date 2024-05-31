// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');
// USAGE: Required to track jest-environment-jsdom dependency
require('jest-environment-jsdom');

// Set the time zone to UTC because that's what GH Actions and just about everything else will use
process.env.TZ = 'UTC';

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './',
});

// Custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
  // TODO: add coverage badge too
  // TODO: Make a concerted effort to get coverage up to over 90%
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/unit',
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
};

// Additional overrides to the Next.js Jest config
// https://github.com/vercel/next.js/issues/35634#issuecomment-1115250297
async function jestConfig() {
  const nextJestConfig = await createJestConfig(customJestConfig)();

  // /node_modules/ is the first pattern, which is why it's targeted like this
  nextJestConfig.transformIgnorePatterns[0] =
    '/node_modules/(?!(parse-ms|pretty-ms))/';
  return nextJestConfig;
}

module.exports = jestConfig;
