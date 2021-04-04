import styles from '../styles/Propositions.module.css';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const CAROUSEL_TIMEOUT = 6000;

export default function Propositions() {
  const { t } = useTranslation('propositions');
  return <section className={styles.propositions}>
    <h3>{t('We believe that good decisions needn’t take more time or energy')}</h3>

    <div className="container">
      <div className={styles.propositions__comparison}>
        <div>
          <p>
            {t('With a premium recommendation platform, we are transforming the recommendation experience')},
          </p>
        </div>

        <img src="/sign.svg" alt="Sign" width="41" height="56"/>

        <div>
          <Carousel timeout={CAROUSEL_TIMEOUT}/>
        </div>
      </div>
    </div>
  </section>;
}

function Carousel({ timeout }: { timeout: number }) {
  const [classNames, setClassNames] = React.useState([styles.hidden, styles.show, styles.hide]);
  const { t } = useTranslation('propositions');

  React.useEffect(() => {
    const timer = setInterval(rotate(setClassNames), timeout);
    return () => clearInterval(timer);
  }, []);

  return <>
    <div
      className={[styles.propositions__highlight, styles['propositions__highlight--yellow'], classNames[0]].join(' ')}>
      <p dangerouslySetInnerHTML={{ __html: t('traveler') }}/>
    </div>

    <div className={[styles.propositions__highlight, styles['propositions__highlight--blue'], classNames[1]].join(' ')}>
      <p dangerouslySetInnerHTML={{ __html: t('host') }}/>
    </div>

    <div
      className={[styles.propositions__highlight, styles['propositions__highlight--purple'], classNames[2]].join(' ')}>
      <p dangerouslySetInnerHTML={{ __html: t('provider') }}/>
    </div>
  </>;
}

const rotate = (set: (value: (state: string[]) => string[]) => void) => () => set(state => [
  ...state.slice(-2),
  state[0]
]);
