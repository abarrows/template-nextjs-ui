/* eslint-disable @typescript-eslint/no-var-requires */
// Importing consola for logging.
const consola = require('consola');

consola
  .withDefaults({
    fancy: true,
    badge: true,
  })
  .withTag('ChatGPT')
  .wrapConsole();

// Importing package.json for app level values.
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
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
