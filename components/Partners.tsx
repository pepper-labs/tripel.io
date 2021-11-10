import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
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
        <Image decoding="async" loading="lazy" src="/tripelio.svg" height="20" width="70.9" alt="Logo" />
      </div>
    </div>

    <div className={styles.partners__logos}>
      <Image decoding="async" loading="lazy" width="67.78" height="60" src="/anna-grand-hotel.png"
        alt="Anna Grand Hotel" />
      <Image decoding="async" loading="lazy" width="136.36" height="60" src="/club-hotel-fured.png"
        alt="Club Hotel Füred" />
      <Image decoding="async" loading="lazy" width="105" height="30" src="/hotel-margareta.png" alt="Hotel Margareta" />
      <Image decoding="async" loading="lazy" width="84.5" height="60" src="/tihany-yacht-club.png"
        alt="Tihany Yacht Club" />
      <Image decoding="async" loading="lazy" width="121.2" height="60" src="/topart-hotel.png" alt="Tópart Hotel" />
    </div>
  </div>;
}
