// Sorted alpha by destination, then alpha by source

const redirects = [
  // External destinations
  {
    source: '/ads.txt',
    destination: 'https://a.pub.network/gocomics-com/ads.txt',
    permanent: true,
    basePath: false,
  },
  {
    source: '/help',
    destination:
      'https://support.gocomics.com/hc/en-us/?ticket_form_id=1500000685482&associated_url=redirect-from-old-help',
    permanent: true,
    basePath: false,
  },

  // Site pages
  {
    source: '/sign(-|_|)in',
    destination: '/',
    permanent: false,
  },
  ...['/account', '/member', '/profile/edit'].map((path) => ({
    source: path,
    destination: '/my-account',
    permanent: true,
  })),

  // Category pages
  ...[
    '/canadiana',
    '/crosswords',
    '/crosswordscubed',
    '/crucigramas',
    '/daily-commuter',
    '/daily-jumble-crossword',
    '/explore/crossword',
    '/iwin-daily-crossword',
    '/play-four',
  ].map((path) => ({
    source: path,
    destination: '/crossword-puzzles',
    permanent: true,
  })),
];

module.exports = () => redirects;
