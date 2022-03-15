import React from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import * as Sentry from '@sentry/nextjs';

import NotFound from 'src/components/commons/NotFound';

const ClientError = () => {
  const router = useRouter();

  // log 404 in Sentry, include requested path
  // see _error.jsx for server side errors
  Sentry.captureException(new Error(`404 Not Found: ${router.asPath}`));

  return (
    <>
      <NextSeo nofollow title="Page Not Found" />
      <NotFound />
    </>
  );
};

export default ClientError;
