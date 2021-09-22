import styles from '../styles/Footer.module.css';
import useTranslation from 'next-translate/useTranslation';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useTranslation('footer');
  return <footer className={styles.footer}>
    <div className={['container', styles.footer__container].join(' ')}>
      <div className={styles.footer__signup}>
        <div>
          <a id="subscribe"/>
          <h4>
            {t('Sign up for our platform')}
          </h4>

          <p>
            {t('Demo CTA')}
          </p>

          <form action="https://tripel.us1.list-manage.com/subscribe/post?u=30e1f6e953412de54f837ee24&amp;id=4518c3a8c1"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank"
                noValidate className={styles.footer__input}>
            <input type="email" placeholder={t('Type your email address')} name="EMAIL" id="mce-EMAIL"/>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_30e1f6e953412de54f837ee24_4518c3a8c1" tabIndex={-1} defaultValue=""/>
            </div>
            <button>{t('Sign up')}</button>
          </form>
        </div>

        <div>
          <img className={styles.footer__illustration} src="/signup.svg" alt="Sign up for our platform" width="451"
               height="280" loading="lazy"/>
        </div>
      </div>

      <div className={styles.footer__contact}>
        {t('We would be over the moon to answer your questions, contact us with any request at')}&nbsp;
        <a className={styles.footer__cta} href="mailto:hello@tripel.io">hello@tripel.io</a>
      </div>

      <div className={styles.footer__privacy}>
        <div>
          <img loading="lazy" width="150" src="/hiventures-logo.png" alt="Powered by HIVENTURES"/>
        </div>

        <div className={styles.footer__content}>
          Tripelio - {year}{' - '}
          <a href="/privacy-policy.pdf" className={styles.footer__cta} target="_blank">{t('Privacy policy')}</a> {' - '}
          <a href="/impressum.pdf" className={styles.footer__cta} target="_blank">{t('Impressum')}</a>
        </div>

        <div/>
      </div>

      <div className={styles.footer__szechenyiLogo}>
        <img loading="lazy" width="300" src="/szechenyi-2020.png" alt="Széchenyi 2020"/>
      </div>
    </div>
  </footer>;
}
