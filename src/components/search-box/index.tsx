import React from 'react';
import Image from 'next/image';

import SearchIcon from '@/assets/ic_Search.png';
import styles from './search-box.module.scss';
import { useRouter } from 'next/router';

const SearchBox = () => {
  const {
    query: { search },
  } = useRouter();

  return (
    <form action="/items?" className={styles['search']} method="GET">
      <input
        type="text"
        name="search"
        required
        autoComplete="off"
        className={styles['search-input']}
        defaultValue={search}
      />
      <button type="submit" className={styles['search-button']}>
        <Image src={SearchIcon} alt="search" />
      </button>
    </form>
  );
};

export default SearchBox;
