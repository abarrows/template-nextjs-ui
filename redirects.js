// Sorted alphabetical by destination, then alphabetical by source

module.exports = [
  // TODO-ONBOARDING: IF there are ads on product this is an ads.txt redirect.
  // Remove the ads.txt redirect if no programmatic ads are used.
  // TODO-ONBOARDING: Add in the support ID for the form and knowledge center.
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
