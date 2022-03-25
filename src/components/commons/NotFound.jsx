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
          <p>The page you&apo;re looking for cannot be found.</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default notFound;
