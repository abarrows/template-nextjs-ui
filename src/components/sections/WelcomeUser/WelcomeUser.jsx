'use client';

import React from 'react';

import { consola } from 'consola';

import SiteLink from 'src/components/commons/SiteLink';

import styles from './WelcomeUser.module.scss';

function WelcomeUser() {
  consola.log('WelcomeUser this is client side from a client component.');
  consola.info(
    'WelcomeUser this is a message for advertising on the client side from a client component.',
  );
  // TODO: ONBOARDING - remove these debug variables while setting up a new project
  // Checking NEXT_PUBLIC_ vars in the client side is a good way to validate
  // if they were set properly during the build. If they are set during
  // runtime, then they will be undefined within the client side, but will be
  // accessible within the server side.

  return (
    <section className={styles.welcome}>
      <p>
        Get started by editing <code>src/app/page.jsx</code>. See the
        project&apos;s{' '}
        <SiteLink
          href='https://github.com/abarrows/template-nextjs-ui#readme'
          openInNewTab
          title='View the Readme'
        >
          README
        </SiteLink>{' '}
        for more information and links to additional documentation.
      </p>
      <ul>
        <li>
          <SiteLink
            href='/api/health'
            title='View the application health check'
          >
            health check
          </SiteLink>
        </li>
        <li>
          <SiteLink
            href='/test-redirect'
            title='Test the redirect functionality'
          >
            test redirect
          </SiteLink>{' '}
          (from /test-redirect to the homepage)
        </li>
        <li>NEXT_PUBLIC_DEPLOY_ENV: {process.env.NEXT_PUBLIC_DEPLOY_ENV}</li>
        <li>NODE_ENV: {process.env.NODE_ENV}</li>
      </ul>
    </section>
  );
}

export default WelcomeUser;
