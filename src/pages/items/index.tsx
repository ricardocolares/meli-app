import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';

import { PageLayout } from '@/components/page-layout';
import { ITEM_DATA, SEARCH_ITEMS } from '@/constants/meli-endpoints';

export default function SearchResults({ results }) {
  useEffect(() => {
    console.log(results);
  }, [results]);
  return (
    <PageLayout>
      {results &&
        results.length > 0 &&
        results.map((result) => <h1>{result.title}</h1>)}
      {!results && <h1>Nenhum item encontrado</h1>}
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await fetch(
      `${SEARCH_ITEMS}?q=${context.query.search}&limit=4`
    );

    const { results } = await response.json();

    console.log(results);

    console.log(`${SEARCH_ITEMS}?q=${context.query.search}`);

    console.log(JSON.stringify(results));

    return { props: { results } };

    // return {
    //   props: {
    //     response,
    //   },
    // };
  } catch (error) {
    return { props: {} };
  }
};
