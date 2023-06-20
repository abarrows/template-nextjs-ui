/** Examples of how to add and format permanent redirects. For environment-
 * specific redirects and other settings, see next.config.js. Uncomment and
 * modify to use. */

module.exports = [
  // Sorted alpha by destination, then alpha by source
  // TODO: ONBOARDING - remove this test redirect while setting up a new project
  {
    source: '/test-redirect',
    destination: '/',
    permanent: true,
  },
  // External destinations
  // {
  //   source: 'relative-path-to-redirect',
  //   destination: 'relative-or-absolute-destination',
  //   permanent: true,
  //   basePath: false,
  // },
  // Site pages
  // ...['/relative-path-to-redirect', '/another-relative-path-to-redirect'].map(
  //   (path) => ({
  //     source: path,
  //     destination: 'relative-or-absolute-destination',
  //     permanent: true,
  //   })
  // ),
];
