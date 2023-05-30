import React from 'react';

import Image from 'next/image';

import Heading from 'src/components/commons/Heading';

import styles from './ShowSiteHeader.module.scss';

function ShowSiteHeader() {
  return (
    <header className={styles.header}>
      <Image
        alt="AMU Logo"
        height={50}
        priority
        src="/images/AMU_master_logo_U.svg"
        width={38}
      />
      <Heading>
        Welcome to AMU&apos;s frontend template repo for Next.js powered apps.
      </Heading>
    </header>
  );
}

export default ShowSiteHeader;
