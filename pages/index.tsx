import Trans from 'next-translate/Trans';
import Head from 'next/head';
import React from 'react';
import Collections from '../components/Collections';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import styles from '../styles/Index.module.scss';

export default function Index() {
  return (
    <>
      <Head>
        <title>Tripelio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/mobile-hero-bg.webp" as="image" type="image/webp" media="(max-width: 768px)" />
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" media="(min-width: 769px)" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <img src="/tripelio.svg" alt="Tripelio" width="150" height="42" />
            </div>

            <h1 className={styles.h1}>
              <Trans i18nKey="home:hero.h1" components={[<br key="br" />]} />
            </h1>

            <p className={styles.p}>
              <Trans i18nKey="home:hero.p" />
            </p>

            <a href="#subscribe" className={styles.button}>
              <Trans i18nKey="home:hero.button" />
            </a>
          </div>
        </section>

        <section className={styles.details}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.image}>
                <picture>
                  <source srcSet="/webapp.webp" type="image/webp" />
                  <source srcSet="/webapp.jpg" type="image/jpeg" />
                  <img src="/webapp.jpg" alt="Check out one of our partner's live app" width="800" height="853" />
                </picture>
              </div>

              <div className={styles.text}>
                <div className={styles.textEntry}>
                  <div className={styles.textTitle}>
                    <Trans i18nKey="home:details.hostInfo.title" />
                  </div>

                  <p className={styles.textContent}>
                    <Trans i18nKey="home:details.hostInfo.p" />
                  </p>
                </div>

                <div className={styles.textEntry}>
                  <div className={styles.textTitle}>
                    <Trans i18nKey="home:details.upsell.title" />
                  </div>

                  <p className={styles.textContent}>
                    <Trans i18nKey="home:details.upsell.p" />
                  </p>
                </div>

                <div className={styles.textEntry}>
                  <div className={styles.textTitle}>
                    <Trans i18nKey="home:details.communication.title" />
                  </div>

                  <p className={styles.textContent}>
                    <Trans i18nKey="home:details.communication.p" />
                  </p>
                </div>

                <p>
                  <a href="/introduction.pdf" target="_blank" className={styles.button}>
                    <Trans i18nKey="home:details.moreInfo" />
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.partnerContainer}>
              <Partners />
            </div>

            <div className={styles.reference}>
              <a href="https://annagrandhotel.tripel.io/?utm_source=landing&utm_medium=web" target="_blank"
                rel="noreferrer noopener" className={styles.button}>
                <Trans i18nKey="home:reference" />
              </a>
            </div>
          </div>

          <Collections />
        </section>
      </main>

      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </>
  );
}
