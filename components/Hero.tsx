import styles from '../styles/Hero.module.scss';
import useTranslation from 'next-translate/useTranslation';

export default function Hero() {
  const { t } = useTranslation('hero');
  return <section className={styles.hero}>
    <div className="container">
      <div className={styles.hero__logo}>
        <img className={styles.hero__logo__img} src="/tripelio.svg" alt="Tripelio" width="150" height="42"/>
      </div>

      <div className={styles.hero__content}>
        <div className={styles.hero__content__text}>
          <div>
            <h1 dangerouslySetInnerHTML={{ __html: t('Your carefully selected favourites') }}/>

            <p>{t('promise')}</p>

            <a href="#subscribe" className={styles.hero__cta}>{t('Subscribe for a demo')}</a>
          </div>
        </div>

        <div className={styles.hero__content__preview}>
          <picture>
            <source srcSet="/dashboard.webp" type="image/webp"/>
            <source srcSet="/dashboard.jpg" type="image/jpeg"/>
            <img src="/dashboard.jpg" alt="Product dashboard" width="600" height="427"/>
          </picture>
        </div>
      </div>
    </div>

    <div className={styles.hero__map}/>
  </section>;
}
