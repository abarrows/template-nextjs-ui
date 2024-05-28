import React from 'react';

import classNames from 'classnames';
// eslint-disable-next-line camelcase
import { Carter_One, Source_Code_Pro } from 'next/font/google';
import PropTypes from 'prop-types';

import ShowSiteHeader from 'src/components/sections/ShowSiteHeader';

import 'src/styles/index.scss';

export const metadata = {
  title: 'Template Next.js UI',
  description: 'Starter kit for new UI apps',
};

const carterOne = Carter_One({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-carter-one',
  weight: '400',
});
const sourceCodePro = Source_Code_Pro({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(carterOne.variable, sourceCodePro.variable)}>
        <ShowSiteHeader />
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
