'use client';

// Error components must be Client Components
import React from 'react';

// TODO: Determine a strategy for Sentry error reporting.

// import * as Sentry from '@sentry/nextjs';

/* eslint-disable react/prop-types */
export default function Error({ error }) {
  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   Sentry.captureException(error);
  // }, [error]);

  return (
    <html lang='en'>
      <body>
        <h1>Global Error</h1>
        <p>This is a root level issue - {error}</p>
      </body>
    </html>
  );
}
