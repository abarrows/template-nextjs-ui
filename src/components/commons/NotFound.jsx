import React from 'react';
import PageWrapper from 'src/components/commons/layouts/PageWrapper';

import styles from './NotFound.module.scss';

const notFound = () => (
  <PageWrapper>
    <div className={styles.errorMessageWrapper}>
      <div className={styles.errorMessage}>
        <div className={styles.errorMessage__heading}>
          <h1>
            404 Error <small>Not Found</small>
          </h1>
        </div>
        <div className={styles.errorMessage__message}>
          <p>
            The page you&apo;re looking for might have disappeared or never
            existed at all. (A frustrating prank from those dunces in the
            Quizzical League, we surmise.)
          </p>
        </div>
      </div>
      <img
        alt="404"
        className={styles.errorMessage__image}
        src="/images/errors/404_Scramble_Margaret_1200.png"
      />
    </div>
  </PageWrapper>
);

export default notFound;
