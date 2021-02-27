import Head from 'next/head';
import styles from '../styles/Home.module.css';

function Hero() {
  return <section className={styles.hero}>
    <div className={styles.hero__wrapper}>
      <div className={styles.hero__logo}>
        <img className={styles.hero__logo__img} src="/tripelio.svg" alt="Tripelio"/>
      </div>

      <div className={styles.hero__content}>
        <div className={styles.hero__content__text}>
          <div>
            <h1>Look no further.</h1>

            <p>
              With a premium recommendation platform we are transforming the recommendation and promotion experience for
              hosts, service providers and travellers alike.
            </p>

            <a href="#" className={styles.hero__cta}>
              All percent inspiration, no percent perspiration.
            </a>
          </div>
        </div>

        <div className={styles.hero__content__preview}>
          <img src="/preview.png" alt="Product preview"/>
        </div>
      </div>
    </div>

    <div className={styles.hero__map}/>
  </section>;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Tripelio</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <Hero/>
      </main>
    </>
  );
}
