import styles from '../styles/Propositions.module.css';
import React from 'react';

const CAROUSEL_TIMEOUT = 6000;

export default function Propositions() {
  return <section className={styles.propositions}>
    <h3>We believe that good decisions needn’t take more time or energy.</h3>

    <div className="container">
      <div className={styles.propositions__comparison}>
        <div>
          <p>
            With a premium recommendation platform, we are transforming the recommendation experience,
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

  React.useEffect(() => {
    const timer = setInterval(rotate(setClassNames), timeout);
    return () => clearInterval(timer);
  }, []);

  return <>
    <p className={[styles.propositions__highlight, styles['propositions__highlight--yellow'], classNames[0]].join(' ')}>
      so that as a <u>traveler</u> you can
      <u>get inspired, browse and buy activities with the quality assurance of your hosts</u>
    </p>

    <p className={[styles.propositions__highlight, styles['propositions__highlight--blue'], classNames[1]].join(' ')}>
      so that as a <u>host</u> you can <u>rapidly set up and easily manage a beautiful catalogue of activities,
      while earning income on your referrals</u>
    </p>

    <p className={[styles.propositions__highlight, styles['propositions__highlight--purple'], classNames[2]].join(' ')}>
      so that as a <u>provider</u> you can <u>create, distribute and maintain your offerings seamlessly across all
      hosts on our platform</u>
    </p>
  </>;
}

const rotate = (set: (value: (state: string[]) => string[]) => void) => () => set(state => [
  ...state.slice(-2),
  state[0]
]);
