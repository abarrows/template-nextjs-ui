const customViewports = {
  // Standard breakpoints
  xs: {
    name: 'XS',
    styles: {
      height: '640px',
      width: '360px',
    },
    type: 'phone',
  },
  sm: {
    name: 'SM',
    styles: {
      height: '896px',
      width: '576px',
    },
    type: 'phone',
  },
  md: {
    name: 'MD',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  lg: {
    name: 'LG',
    styles: {
      height: '768px',
      width: '992px',
    },
    type: 'desktop',
  },
  xl: {
    name: 'XL',
    styles: {
      height: '800px',
      width: '1200px',
    },
    type: 'desktop',
  },
  xxl: {
    name: 'XXL',
    styles: {
      height: '900px',
      width: '1400px',
    },
    type: 'desktop',
  },

  // Standard devices
  //   phone = [xs, sm]
  //   tablet = [md]
  //   mobile = [phone, tablet]
  //   desktop = [lg, xl, xxl]
  phone: {
    name: 'Phone',
    styles: {
      height: '640px',
      width: '360px',
    },
    type: 'phone',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop',
    styles: {
      height: '736px',
      width: '992px',
    },
    type: 'desktop',
  },
};

export default customViewports;
