import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import styles from '../../styles/ProviderTermsAndConditions.module.scss';

export default function ProviderTermsAndConditions() {
  const { t } = useTranslation('provider-terms');
  return <div className={styles.container}>
    <Head>
      <title>{t('title')}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preload" href="/dashboard.webp" as="image" />
    </Head>

    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <a><Image src="/tripelio.svg" alt="Tripelio" width="150" height="42" /></a>
        </Link>
      </div>
    </nav>

    <div className={styles.map} />

    <main className={styles.main}>
      <div className={styles.title}>
        <h1>{t('title')}</h1>
      </div>

      <div className={styles.content}>
        <ul>
          <li>
            <a href="/provider-terms-and-conditions.pdf" target="_blank">
              2021. június 25. után kötött szolgáltatói szerződésekre alkalmazandó Általános Szerződési Feltételek
              (hatályos: 2021. június 25-től)
            </a>
          </li>
        </ul>
      </div>
    </main>

    <Footer />
  </div>;
}
