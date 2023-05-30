import React from 'react';

import SiteLink from 'src/components/commons/SiteLink';

import styles from './WelcomeUser.module.scss';

function WelcomeUser() {
  return (
    <section className={styles.main}>
      <p>
        Get started by editing <code>src/app/page.jsx</code>. See the
        project&apos;s{' '}
        <SiteLink
          href="https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template#readme"
          openInNewTab
        >
          README
        </SiteLink>{' '}
        for more information and links to additional documentation.
      </p>
    </section>
  );
}

export default WelcomeUser;
