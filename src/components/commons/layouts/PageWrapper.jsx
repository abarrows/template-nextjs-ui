import React from 'react';
import PropTypes from 'prop-types';

// Designed to be used in src/page-templates or src/pages
const PageWrapper = ({ children }) => <div>{children}</div>;

PageWrapper.propTypes = {
  /** PageWrapper Contents */
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
