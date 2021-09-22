import styles from '../styles/Collections.module.scss';
import useTranslation from 'next-translate/useTranslation';

export default function Collections() {
  const { t } = useTranslation('collections');
  return <section className={styles.collections}>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>{t('Discover our collection')}</h1>
        <p>{t('offers')}</p>
      </header>
    </div>

    <div className={styles.scroll}>
      <ul className={styles.list}>
        <li className={styles.balatonfured}>
          <a href="https://balatonfured.tripel.io/?utm_source=tripel.io&utm_medium=web" target="_blank"
             rel="noreferrer noopener">
            Balatonfüred
          </a>
        </li>

        <li className={styles.budapest}>
          <a href="https://budapest.tripel.io/?utm_source=tripel.io&utm_medium=web" target="_blank"
             rel="noreferrer noopener">
            Budapest
          </a>
        </li>
      </ul>
    </div>
  </section>;
}
