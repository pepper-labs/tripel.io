import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Hero from '../components/Hero';
import Propositions from '../components/Propositions';
import Footer from '../components/Footer';
import Collections from '../components/Collections';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tripelio</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preload" href="/dashboard.webp" as="image"/>
      </Head>

      <main className={styles.main}>
        <Hero/>

        <Collections/>

        <Propositions/>
      </main>

      <Footer/>
    </>
  );
}
