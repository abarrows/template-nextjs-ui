import React from 'react';

import PropTypes from 'prop-types';

import 'src/styles/index.scss';

export const metadata = {
  title: 'AMU Next.js Template',
  description: 'Starter kit for new UI apps',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
