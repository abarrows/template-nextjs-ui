import React from 'react';
import SiteLink from '@/commons/SiteLink';

// TODO: Add back in sentry logging
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <SiteLink href="/">Return Home</SiteLink>
    </div>
  );
}
