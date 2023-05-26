import React from 'react';

import Image from 'next/image';

import SiteLink from 'src/components/commons/SiteLink';

import styles from './page.module.scss';

function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing{' '}
          <code className={styles.code}>src/app/page.jsx</code>
        </p>
        <p>
          See the project&apos;s{' '}
          <SiteLink
            href="https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template#readme"
            openInNewTab
          >
            README
          </SiteLink>{' '}
          for more information and links to additional documentation.
        </p>
      </div>

      <div className={styles.center}>
        <Image
          alt="AMU Logo"
          className={styles.logo}
          height={180}
          priority
          src="/images/AMU_master_logo_U.svg"
          width={180}
        />
      </div>
    </main>
  );
}

export default HomePage;
