import styles from '../styles/Propositions.module.css';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

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
      
      <div className={styles.partners}>
        <div>
          <div className={styles.partners__title}>
            {t('Our partners')}
          </div>
          
          <div className={styles.partners__poweredby}>
            <span>Powered by &nbsp;</span>
            <img src="/tripelio.svg" height="20" alt="Logo"/></div>
        </div>
        
        <div className={styles.partners__logos}>
          <img height="60" src="/anna-grand-hotel.png" alt="Anna Grand Hotel"/>
          <img height="60" src="/club-hotel-fured.png" alt="Club Hotel Füred"/>
          <img height="30" src="/hotel-margareta.png" alt="Hotel Margareta"/>
          <img height="60" src="/tihany-yacht-club.png" alt="Tihany Yacht Club"/>
          <img height="60" src="/topart-hotel.png" alt="Tópart Hotel"/>
        </div>
      </div>
    </div>
  </section>;
}
