/* eslint-disable @typescript-eslint/no-var-requires */
// Importing sentry configuration

// Importing package.json for app level values.
const consoleFormat = require('console-stamp');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const packageJson = require('./package.json');
// Reformat console logs to be cleaner and more readable
consoleFormat(console, {
  pattern: 'HH:MM:ss.l',
  colors: {
    stamp: 'yellow',
    label: 'white',
    metadata: 'green',
  },
  label: false,
  metadata: `[${packageJson.name}]`,
});
// Optionally analyze client, server, and edge/middleware bundle sizes,
// Run with `yarn build:analyze`

// Permanent site redirects file, see that for adding new redirects
const redirects = require('./redirects');

// eslint-disable-next-line require-await
module.exports = async () => {
  const nextConfig = {
    /* eslint-disable-next-line require-await */
    async redirects() {
      const prodRedirects = [];
      if (process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production') {
        // prodRedirects.push({
        //   source: 'url to disable',
        //   destination: '/',
        //   permanent: false,
        // });
      }
      return [...prodRedirects, ...redirects];
    },
    // The eslint ignoreDuringBuilds boolean allows production builds to successfully complete even if
    // the project has ESLint errors. This is set to true because we already have ESLint configured to
    // run in a separate workflow
    eslint: { ignoreDuringBuilds: true },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cmsassets.gocomics.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'avatar.amuniversal.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'contentassets.amuniversal.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    productionBrowserSourceMaps: true,
    swcMinify: true,
  };
  return withBundleAnalyzer(nextConfig);
};
