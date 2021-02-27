import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tripelio</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <img className={styles.logo} src="/tripelio.svg" alt="Tripelio"/>
      </main>
    </>
  );
}
