import Head from 'next/head';
import styles from '../styles/Home.module.css';

function Hero() {
  return <section className={styles.hero}>
    <div className="container">
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

const cls = (...classNames: string[]) => classNames.join(' ')

function ProductHighlights() {
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
            Available activity options are vast, easily souring a vacation with decision fatigue and fomo
          </li>

          <li>
            Ratings are polarised and influenced while recommendations are often driven by business interest
          </li>

          <li>
            Traditional methods of receiving host recommendations are outdated (leaflets, guestbooks, city maps)
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
            Curating and managing a solid recommendation portfolio requires a lot of time and effort
          </li>

          <li>
            Answering repetitive guest questions can make up to 40% of a receptionists time
          </li>

          <li>
            No control over guest satisfaction when they use 3rd party sites
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
            Setting up and maintaining bilateral partner agreements or an affiliate network is cumbersome
          </li>

          <li>
            Spreading and updating information requires significant individual marketing and sales resources
          </li>

          <li>
            As a starting company, or one with less resources it is often difficult to stand out in the noise
          </li>
        </ul>
      </div>
    </div>
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

        <ProductHighlights/>
      </main>
    </>
  );
}
