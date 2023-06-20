// Add timestamps to console logs
require('console-stamp')(console);

// Optionally analyze client, server, and edge/middleware bundle sizes,
// Run with `yarn build:analyze`
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// Permanent site redirects file, see that for adding new redirects
const redirects = require('./redirects');

const customConfig = {
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
    // TODO: ONBOARDING - Set the correct CDN host
    domains: ['cmsassets.amuproduct.com'],
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
      //   source: 'url to disable',
      //   destination: '/',
      //   permanent: false,
      // });
    }

    return [...prodRedirects, ...redirects];
  },
};

module.exports = withBundleAnalyzer(customConfig);
