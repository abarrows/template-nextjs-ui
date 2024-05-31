// next-sitemap.config.js
const sitemapBaseUrl =
  process.env.CI === 'test' || process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_LOCAL_URL
    : process.env.NEXT_PUBLIC_BASE_URL;
module.exports = {
  siteUrl: sitemapBaseUrl,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 4999,
  generateRobotsTxt: true,
  exclude: ['/dynamic-sitemap.xml', '/api*', '/admin', '/create-account/*'],
  // alternateRefs: [
  //   {
  //     href: 'https://gocomics.com',
  //   },
  // ],
  // TODO-REVIEW: Need to work with the team to establish which basic pages.
  Sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml.gz`,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/'],
      },
      {
        userAgent: 'BingPreview',
        allow: ['/'],
      },
      {
        userAgent: 'Facebot',
        allow: ['/'],
      },
      {
        userAgent: 'Twitterbot',
        allow: ['/'],
      },
      {
        userAgent: 'Yahoo Pipes 2.0',
        allow: ['/'],
      },
      // Not sure if we will need this.
      // {
      //   userAgent: '*',
      //   disallow: [
      //     '/dynamic-sitemap.xml',
      //     '/api*',
      //     '/admin',
      //   ],
      // },
    ],
    additionalSitemaps: [`${sitemapBaseUrl}/dynamic-sitemap.xml`],
  },
};
