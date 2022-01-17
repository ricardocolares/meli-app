import React from 'react';
import { Header } from '@/components/header';

import styles from './page-layout.module.scss';

export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles['main']}>
        <div className={styles['main__container']}>{children}</div>
      </main>
    </>
  );
};
