import React from 'react';
import useSWR from 'swr';
import styles from './page.module.css';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();

  return json;
}

export default function Profile({ params }) {
  const ENDPOINT = `/api/users/${params.uuid}`;

  const { data, error } = useSWR(ENDPOINT, fetcher);

  console.log(data, error);

  console.log(params);
  return (
    <main className={styles.main}>
      <div>
        <span className={styles.span}>Build better habits.</span>
        <span></span>
      </div>
    </main>
  );
}
