import React from 'react';
import classNames from 'classnames';
// eslint-disable-next-line camelcase
import { Source_Code_Pro } from 'next/font/google';
import PropTypes from 'prop-types';
import ShowSiteHeader from 'src/components/sections/ShowSiteHeader';
import 'src/styles/index.scss';

const sourceCodePro = Source_Code_Pro({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  weight: ['400', '700'],
});

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const metadata = {
  title: 'Template Next.js UI',
  description: 'Starter kit for new UI apps',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(sourceCodePro.variable)}>
        <ShowSiteHeader />
        {children}
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
