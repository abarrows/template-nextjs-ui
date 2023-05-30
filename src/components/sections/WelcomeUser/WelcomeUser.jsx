import React from 'react';

import Image from 'next/image';

import SiteLink from 'src/components/commons/SiteLink';

import styles from './WelcomeUser.module.scss';

function WelcomeUser() {
  return (
    <>
      <header className={styles.header}>
        <Image
          alt="AMU Logo"
          height={50}
          priority
          src="/images/AMU_master_logo_U.svg"
          width={38}
        />
        <h1 className={styles.header__text}>
          Welcome to AMU&apos;s frontend template repo for Next.js powered apps.
        </h1>
      </header>

      <main className={styles.main}>
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
      </main>
    </>
  );
}

export default WelcomeUser;
