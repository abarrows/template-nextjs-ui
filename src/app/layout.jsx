import React from 'react';

import { Inter } from 'next/font/google';
import PropTypes from 'prop-types';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AMU Next.js Template',
  description: 'Starter kit for new UI apps',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
