import React from 'react';

import Image from 'next/image';

import Heading from 'src/components/commons/Heading';

import styles from './ShowSiteHeader.module.scss';

function ShowSiteHeader() {
  return (
    <header className={styles.header}>
      <Image
        alt='PRODUCT_NAME Logo'
        height={200}
        priority
        src='/images/logo-transparent.svg'
        width={152}
      />
      <Heading>
        Welcome to ACB&apos;s template UI repository frontend template repo for
        Next.js powered apps.
      </Heading>
      <p>
        Note: This is a WIP! This needs typescript, Radix, Tailwind, and several
        other patterns that are in my private repos at the moment.
      </p>
    </header>
  );
}

export default ShowSiteHeader;
