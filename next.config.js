/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @type {import('next').NextConfig | ((phase: string, defaultConfig: import('next').NextConfig) => Promise<import('next').NextConfig>)}
 */
module.exports = async () => {
  const { default: consola } = await import('consola');
  const { default: bundleAnalyzer } = await import('@next/bundle-analyzer');
  const redirects = (await import('./redirects.js')).default;

  consola
    .withDefaults({
      fancy: true,
      badge: true,
    })
    .withTag('ChatGPT')
    .wrapConsole();

  const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  });

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
      domains: ['assets.product.com'],
      // TODO: allow avif once the Storybook addon supports it
      // https://github.com/RyanClementsHax/storybook-addon-next#avif
      // formats: ['image/avif', 'image/webp'],
    },
    productionBrowserSourceMaps: true,
    redirects() {
      // Production-only redirects
      // These are used as a quick feature flag when certain pages should be
      // temporarily excluded from the prod site.
      const prodRedirects = [];
      if (process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production') {
        prodRedirects.push({
          source: 'url to disable',
          destination: '/',
          permanent: false,
        });
      }

      return [...prodRedirects, ...redirects];
    },
  };

  return withBundleAnalyzer(customConfig);
};
