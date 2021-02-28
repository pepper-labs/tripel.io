import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ProductHighlights from '../components/ProductHighlights';
import Hero from '../components/Hero';
import Premise from '../components/Premise';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tripelio</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <Hero/>

        <ProductHighlights/>

        <Premise/>
      </main>
    </>
  );
}
