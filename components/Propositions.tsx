import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import styles from '../styles/Propositions.module.scss';
import Partners from './Partners';

export default function Propositions() {
  const { t } = useTranslation('propositions');
  return <section className={styles.propositions}>
    <h3>{t('We believe that good decisions needn’t take more time or energy')}</h3>

    <div className="container">
      <div className={styles.propositions__screenshot}>
        <div className={styles.screenshot__container}>
          <img srcSet="/screenshot.jpg, /screenshot@2x.jpg 2x" src="/screenshot.jpg" width="400" alt={t('screenshot')}/>
        </div>

        <div>
          <div>
            <strong>
              {t('About the platform')}
            </strong>
          </div>

          <ul>
            <li>{t('hosts')}</li>
            <li>{t('travelers')}</li>
            <li>{t('app')}</li>
          </ul>

          <a href="/introduction.pdf" target="_blank" className={styles.cta}>{t('More info')}</a>
        </div>
      </div>

      <div className={styles.partnersContainer}>
        <Partners />
      </div>

      <div className={styles.referenceCtaContainer}>
        <a href="https://annagrandhotel.tripel.io" target="_blank" rel="noreferrer noopener" className={styles.cta}>
          {t('Check out a reference')}
        </a>
      </div>
    </div>
  </section>;
}
