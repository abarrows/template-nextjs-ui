// Sorted alphabetical by destination, then alphabetical by source

const redirects = [
  // OPTIONAL: IF there are ads on product this is an ads.txt redirect.
  // OPTIONAL: IF the product has customer support
  {
    source: '/ads.txt',
    destination: 'https://a.pub.network/amuproduct-com/ads.txt',
    permanent: true,
    basePath: false,
  },
  {
    source: '/help',
    destination:
      'https://support.amuproduct.com/hc/en-us/?ticket_form_id=XXXXXXXXXXX&associated_url=redirect-from-old-help',
    permanent: true,
    basePath: false,
  },
];

module.exports = () => redirects;
