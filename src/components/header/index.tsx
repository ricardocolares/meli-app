import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './header.module.scss';
import Logo from '@/assets/Logo_ML.png';
import SearchBox from '../search-box';

export const Header: React.FC = () => {
  return (
    <header className={styles['header']}>
      <nav className={styles['header-nav']}>
        <Link href="/">
          <a>
            <Image src={Logo} alt="Meli Logo" layout="intrinsic" />
          </a>
        </Link>
        <SearchBox />
      </nav>
    </header>
  );
};
