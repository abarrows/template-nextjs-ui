/** These viewports fit within our breakpoints as defined
 * in breakpointDefinitions.js and use the same terminology
 * to describe them (xs, mobile, etc).
 *
 * Interactive documentation is available in Storybook/Breakpoints.
 * TODO-REVIEW: Discuss with team if this is something that we should list as optional or remove.
 * */

 const viewportDimensions = {
  xs: {
    breakpointName: 'XS Phone',
    deviceType: 'phone',
    screenSize: `(${375}px/${667}px)`,
    windowSize: {
      width: 375,
      height: 667,
    },
  },
  sm: {
    breakpointName: 'SM Phone',
    deviceType: 'phone',
    screenSize: `(${600}px/${900}px)`,
    windowSize: {
      width: 600,
      height: 900,
    },
  },
  md: {
    breakpointName: 'MD Tablet',
    deviceType: 'tablet',
    screenSize: `(${768}px/${1024}px)`,
    windowSize: {
      width: 768,
      height: 1024,
    },
  },
  lg: {
    breakpointName: 'LG Desktop',
    deviceType: 'desktop',
    screenSize: `(${1024}px/${768}px)`,
    windowSize: {
      width: 1024,
      height: 768,
    },
  },
  xl: {
    breakpointName: 'XL Desktop',
    deviceType: 'desktop',
    screenSize: `(${1280}px/${800}px)`,
    windowSize: {
      width: 1280,
      height: 800,
    },
  },
  xxl: {
    breakpointName: 'XXL Desktop',
    deviceType: 'desktop',
    screenSize: `(${1400}px/${900}px)`,
    windowSize: {
      width: 1400,
      height: 900,
    },
  },
};

export default viewportDimensions;
