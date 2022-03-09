// Add timestamps to console logs
require('console-stamp')(console);

// Use the SentryWebpack plugin to upload the source maps during build step
const { withSentryConfig } = require('@sentry/nextjs');

const getRedirects = require('./redirects/getRedirects');
// The productionBrowserSourceMaps boolean is a setting for Next.js

// The eslint ignoreDuringBuilds boolean allows production builds to successfully complete even if
// the project has ESLint errors. This is set to true because we already have ESLint configured to
// run in a separate workflow
const moduleExports = {
  async redirects() {
    return getRedirects();
  },
  productionBrowserSourceMaps: true,
  eslint: { ignoreDuringBuilds: true },

  webpack: (config) => {
    const newConfig = config;

    // SVG support
    newConfig.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Polyfills
    const originalEntry = newConfig.entry;
    newConfig.entry = async () => {
      const entries = await originalEntry();
      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift('./client/polyfills.js');
      }
      return entries;
    };

    return newConfig;
  },
};

module.exports = process.env.SENTRY_AUTH_TOKEN
  ? withSentryConfig(moduleExports, { silent: true })
  : moduleExports;
