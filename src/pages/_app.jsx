/* eslint-disable react/jsx-props-no-spreading, react/forbid-prop-types */
// Core
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// Components
// import { DefaultSeo } from 'next-seo';
// import SEO from 'next-seo.config';

// Helpers
import ErrorBoundary from 'src/components/commons/ErrorBoundary';

// Styles
import '../style/index.scss';

const AmuProduct = ({ Component, err, pageProps }) => {

  const Template = Component.template;
  return (
  <>
      {/* There should only be one Head Component, see https://nextjs.org/docs/api-reference/next/head */}
      {/* <DefaultSeo {...SEO} /> */}
      <Head>
      {/* <link
        href="/images/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/images/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/images/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/favicon-manifest.json" rel="manifest" />
      <link
        color="#05354e"
        href="/images/favicons/safari-pinned-tab.svg"
        rel="mask-icon"
      /> */}
      <meta content="#05354e" name="msapplication-TileColor" />
      <meta content="#ffffff" name="theme-color" />
      <script src="https://utilities.amuniversal.com/unsupportedbrowsers/index.js" />
    </Head>
    <ErrorBoundary>
      <>
        {Template ? (
          <Template {...pageProps}>
            <Component {...pageProps} err={err} />
          </Template>
        ) : (
          <Component {...pageProps} err={err} />
        )}
      </>
    </ErrorBoundary>
  </>
  );
};

AmuProduct.propTypes = {
  Component: PropTypes.func.isRequired,
  err: PropTypes.any,
  pageProps: PropTypes.object.isRequired,
};

AmuProduct.defaultProps = {
  err: undefined,
};

export default AmuProduct;
