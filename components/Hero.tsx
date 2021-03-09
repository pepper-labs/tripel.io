import styles from '../styles/Hero.module.css';

export default function Hero() {
  return <section className={styles.hero}>
    <div className="container">
      <div className={styles.hero__logo}>
        <img className={styles.hero__logo__img} src="/tripelio.svg" alt="Tripelio" width="150" height="42"/>
      </div>

      <div className={styles.hero__content}>
        <div className={styles.hero__content__text}>
          <div>
            <h1>Your carefully <br/> selected favourites</h1>

            <p>
              With a premium recommendation platform we are transforming the recommendation and promotion experience for
              hosts, service providers and travellers alike.
            </p>

            <span className={styles.hero__cta}>
              All percent inspiration, no percent perspiration.
            </span>
          </div>
        </div>

        <div className={styles.hero__content__preview}>
          <picture>
            <source srcSet="/dashboard.webp" type="image/webp"/>
            <source srcSet="/dashboard.jpg" type="image/jpeg"/>
            <img src="/dashboard.jpg" alt="Product dashboard"/>
          </picture>
        </div>
      </div>
    </div>

    <div className={styles.hero__map}/>
  </section>;
}
