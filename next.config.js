// Add timestamps to console logs
require('console-stamp')(console);

// Use the SentryWebpack plugin to upload the source maps during build step
const { withSentryConfig } = require('@sentry/nextjs');

// Optionally analyze client and server bundle sizes,
// can be run with `yarn build:analyze` or`ANALYZE=true yarn build`
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const redirects = require('./redirects');

// The eslint ignoreDuringBuilds boolean allows production builds to successfully complete even if
// the project has ESLint errors. This is set to true because we already have ESLint configured to
// run in a separate workflow
const customConfig = {
  // TODO: remove optimizeFonts: false after this issue is resolved
  // https://github.com/vercel/next.js/issues/36498
  optimizeFonts: false,
  eslint: {
    // The eslint ignoreDuringBuilds boolean allows production builds to
    // successfully complete even if the project has ESLint errors. This is
    // set to true because we already have ESLint configured to run in a
    // separate workflow.
    ignoreDuringBuilds: true,
  },
  images: {
    // Breakpoints, plus 2x 1200 and 1400 for retina screens
    deviceSizes: [576, 768, 992, 1200, 1400, 2400, 2800],
    domains: ['cmsassets.puzzlesociety.com'],
    // TODO: allow avif once the Storybook addon supports it
    // https://github.com/RyanClementsHax/storybook-addon-next#avif
    // formats: ['image/avif', 'image/webp'],
  },
  productionBrowserSourceMaps: true,
  swcMinify: true,

  async redirects() {
    // Production-only redirects
    // These are used as a quick feature flag when certain pages should be
    // temporarily excluded from the prod site.
    const prodRedirects = [];
    if (process.env.DEPLOY_ENV === 'production') {
      // prodRedirects.push({
      //   source: '/TODO',
      //   destination: '/',
      //   permanent: false,
      // });
    }

    return [...prodRedirects, ...redirects];
  },

  webpack: (config) => {
    const newConfig = config;

    // SVG support
    newConfig.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return newConfig;
  },
};

const withSentry = process.env.SENTRY_AUTH_TOKEN
  ? withSentryConfig(customConfig, { silent: true })
  : customConfig;

module.exports = withBundleAnalyzer(withSentry);
