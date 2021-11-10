import Trans from 'next-translate/Trans';
import Head from 'next/head';
import React from 'react';
import Collections from '../components/Collections';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import styles from '../styles/Redesign.module.scss';

export default function Redesign() {
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
              <Trans i18nKey="redesign:hero.h1" components={[<br />]} />
            </h1>

            <p className={styles.p}>
              <Trans i18nKey="redesign:hero.p" />
            </p>

            <a href="#subscribe" className={styles.button}>
              <Trans i18nKey="redesign:hero.button" />
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
                    <Trans i18nKey="redesign:details.hostInfo.title" />
                  </div>

                  <p className={styles.textContent}>
                    <Trans i18nKey="redesign:details.hostInfo.p" />
                  </p>
                </div>

                <div className={styles.textEntry}>
                  <div className={styles.textTitle}>
                    <Trans i18nKey="redesign:details.upsell.title" />
                  </div>

                  <p className={styles.textContent}>
                    <Trans i18nKey="redesign:details.upsell.p" />
                  </p>
                </div>

                <div className={styles.textEntry}>
                  <div className={styles.textTitle}>
                    <Trans i18nKey="redesign:details.communication.title" />
                  </div>

                  <p className={styles.textContent}>
                    <Trans i18nKey="redesign:details.communication.p" />
                  </p>
                </div>

                <p>
                  <a href="/introduction.pdf" target="_blank" className={styles.button}>
                    <Trans i18nKey="redesign:details.moreInfo" />
                  </a>
                </p>
              </div>
            </div>

            <Partners />
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
