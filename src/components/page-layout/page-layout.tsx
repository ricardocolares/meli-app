import React from 'react';

import styles from './page-layout.module.scss';

export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <main className={styles['main']}>
        <div className={styles['main__wrapper']}>{children}</div>
      </main>
    </>
  );
};
