import React from 'react';

import Image from 'next/image';

import Heading from 'src/components/commons/Heading';

import styles from './ShowSiteHeader.module.scss';

function ShowSiteHeader() {
  return (
    <header className={styles.header}>
      <Image
        alt="TODO_PRODUCT_NAME Logo"
        height={50}
        priority
        src="/images/logo-transparent.svg"
        width={38}
      />
      <Heading>
        Welcome to ACB&apos;s template UI repository frontend template repo for
        Next.js powered apps.
      </Heading>
    </header>
  );
}

export default ShowSiteHeader;
