module.exports = {
  siteUrl: process.env.BASE_URL,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 4999,
  generateRobotsTxt: true,
  exclude: ['/dynamic-sitemap.xml', '/api*', '/admin'],
  // alternateRefs: [
  //   {
  //     href: 'https://amuproduct.com',
  //   },
  // ],
  // TODO-REVIEW: Need to work with the team to establish which basic pages.
  Sitemap: `${process.env.BASE_URL}/sitemap.xml.gz`,

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
    additionalSitemaps: [`${process.env.BASE_URL}/dynamic-sitemap.xml`],
  },
};
