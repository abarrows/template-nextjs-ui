const nextJest = require('next/jest');

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './',
});

// Custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
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
