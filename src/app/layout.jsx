import React from 'react';

import classNames from 'classnames';
// eslint-disable-next-line camelcase
import { Carter_One, Source_Sans_Pro } from 'next/font/google';
import PropTypes from 'prop-types';

import 'src/styles/index.scss';

export const metadata = {
  title: 'AMU Next.js Template',
  description: 'Starter kit for new UI apps',
};

const carterOne = Carter_One({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-carter-one',
  weight: '400',
});
const sourceSansPro = Source_Sans_Pro({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-source-sans-pro',
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(carterOne.variable, sourceSansPro.variable)}>
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
