import React from 'react';

import SiteLink from 'src/components/commons/SiteLink';

import styles from './WelcomeUser.module.scss';

function WelcomeUser() {
  // TODO: ONBOARDING - remove these debug variables while setting up a new project
  // Checking NEXT_PUBLIC_ vars in the client side is a good way to validate
  // if they were set properly during the build. If they are set during
  // runtime, then they will be undefined within the client side, but will be
  // accessible within the server side.
  const devFile = process.env.NEXT_PUBLIC_IS_ENV_DEVELOPMENT_FILE || false;
  const prodFile = process.env.NEXT_PUBLIC_IS_ENV_PRODUCTION_FILE || false;

  return (
    <section className={styles.welcome}>
      <p>
        Get started by editing <code>src/app/page.jsx</code>. See the
        project&apos;s{' '}
        <SiteLink
          href="https://github.com/abarrows/template-nextjs-ui#readme"
          openInNewTab
        >
          README
        </SiteLink>{' '}
        for more information and links to additional documentation.
      </p>
      <ul>
        <li>
          <SiteLink href="/api/health">health check</SiteLink>
        </li>
        <li>
          <SiteLink href="/test-redirect">test redirect</SiteLink> (from
          /test-redirect to the homepage)
        </li>
        <li>Using .env.development: {devFile.toString()}</li>
        <li>Using .env.production: {prodFile.toString()}</li>
      </ul>
    </section>
  );
}

export default WelcomeUser;
