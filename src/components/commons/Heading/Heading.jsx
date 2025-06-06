import React from 'react';

import PropTypes from 'prop-types';

import styles from './Heading.module.scss';

export default function Heading({
  Element = 'h1',
  children,
  className = null,
}) {
  return <Element className={className || styles.heading}>{children}</Element>;
}

Heading.propTypes = {
  Element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
