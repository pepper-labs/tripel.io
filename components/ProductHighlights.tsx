import styles from '../styles/ProductHighlights.module.css';

const cls = (...classNames: string[]) => classNames.join(' ');

export default function ProductHighlights() {
  return <section className={cls(styles.highlights, 'container')}>
    <div>
      <h2>
        There is plenty of noise to cut through
      </h2>

      <div className={cls(styles.highlight, styles['highlight--yellow'], styles['highlight--bottom-right-rounded'])}>
        <div className={styles.highlight__title}>
          <div className={styles.highlight__title__icon}>
            <img src="/travelers.svg" alt="Travelers"/>
          </div>

          <div className={styles.highlight__title__text}>Travelers</div>
        </div>

        <ul className={styles.highlight__problems}>
          <li>
            <strong>Available activity options are vast</strong>, making an educated decision a labor intensive feat -
            tiring you instead of relaxing during an active trip
          </li>

          <li>
            <strong>Ratings are not always reliable</strong>, while recommendations are often driven by pure business
            interest
          </li>

          <li>
            <strong>Outdated methods of receiving host recommendations</strong> are the standard (leaflets, guestbooks,
            city maps)
          </li>
        </ul>
      </div>
    </div>

    <div>
      <div className={cls(styles.highlight, styles['highlight--blue'], styles['highlight--bottom-right-rounded'])}>
        <div className={styles.highlight__title}>
          <div className={styles.highlight__title__icon}>
            <img src="/hosts.svg" alt="Hosts"/>
          </div>

          <div className={styles.highlight__title__text}>Hosts</div>
        </div>

        <ul className={styles.highlight__problems}>
          <li>
            <strong>Curating and managing a solid recommendation portfolio</strong> requires a lot of time and effort
          </li>

          <li>
            <strong>Answering repetitive guest questions</strong> can make up to 40% of a receptionist’s time
          </li>

          <li>
            <strong>Little control over guest satisfaction</strong> when they use 3rd party sites for activity booking
          </li>
        </ul>
      </div>

      <div className={cls(styles.highlight, styles['highlight--purple'], styles['highlight--top-right-rounded'])}>
        <div className={styles.highlight__title}>
          <div className={styles.highlight__title__icon}>
            <img src="/providers.svg" alt="Providers"/>
          </div>

          <div className={styles.highlight__title__text}>Providers</div>
        </div>

        <ul className={styles.highlight__problems}>
          <li>
            <strong>Setting up and maintaining bilateral partner agreements</strong> or an affiliate network is
            cumbersome
          </li>

          <li>
            <strong>Spreading and updating information</strong> requires significant individual marketing and sales
            resources
          </li>

          <li>
            <strong>It is often difficult to stand out in the noise</strong> as a starting company, or one with less
            resources
          </li>
        </ul>
      </div>
    </div>
  </section>;
}
