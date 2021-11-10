import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import styles from '../styles/Partners.module.scss';

export default function Partners() {
  const { t } = useTranslation('partners');

  return <div className={styles.partners}>
    <div>
      <div className={styles.partners__title}>
        {t('Our partners')}
      </div>

      <div className={styles.partners__poweredby}>
        <span>Powered by &nbsp;</span>
        <img src="/tripelio.svg" height="20" alt="Logo" /></div>
    </div>

    <div className={styles.partners__logos}>
      <img height="60" src="/anna-grand-hotel.png" alt="Anna Grand Hotel" />
      <img height="60" src="/club-hotel-fured.png" alt="Club Hotel Füred" />
      <img height="30" src="/hotel-margareta.png" alt="Hotel Margareta" />
      <img height="60" src="/tihany-yacht-club.png" alt="Tihany Yacht Club" />
      <img height="60" src="/topart-hotel.png" alt="Tópart Hotel" />
    </div>
  </div>;
}
