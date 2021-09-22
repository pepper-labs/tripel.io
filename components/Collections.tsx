import styles from '../styles/Collections.module.scss';

export default function Collections() {
  return <section className={styles.collections}>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Fedezze fel kínálatunkat</h1>
        <p>
          Folyamatosan bővülő kínálatunkból akár percek alatt összerakhatja vendégei számára foglalható ajánló oldalát
        </p>
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
