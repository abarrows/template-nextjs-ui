module.exports = {
  siteUrl: process.env.BASE_URL,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 4999,
  generateRobotsTxt: true,
  exclude: ['/dynamic-sitemap.xml', '/api*'],

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
    ],
    additionalSitemaps: [`${process.env.BASE_URL}/dynamic-sitemap.xml`],
  },
};
