import '../style/index.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';



const AmuProduct = ({ Component, pageProps }) => (
    <>
      {/* There should only be one Head Component, see https://nextjs.org/docs/api-reference/next/head */}
      <DefaultSeo {...SEO} />
      <Head>
        <link
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
        />
        <meta content="#05354e" name="msapplication-TileColor" />
        <meta content="#ffffff" name="theme-color" />
        <script src="https://utilities.amuniversal.com/unsupportedbrowsers/index.js" />
      </Head>
    </>
  );

AmuProduct.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default AmuProduct;

