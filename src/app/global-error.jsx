'use client';

// Error components must be Client Components
import React from 'react';

// TODO: Determine a strategy for Sentry error reporting.

// import * as Sentry from '@sentry/nextjs';

import Typography from '@/commons/Typography';

/* eslint-disable react/prop-types */
export default function Error({ error }) {
  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   Sentry.captureException(error);
  // }, [error]);

  return (
    <html lang='en'>
      <body>
        <Typography HtmlElement='h2' display='d2'>
          Global Error
        </Typography>
        <p>This is a root level issue - {error}</p>
      </body>
    </html>
  );
}
