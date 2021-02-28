import styles from '../styles/Premise.module.css';

export default function Premise() {
  return <section className={styles.premise}>
    <h3>We believe that good decisions needn’t take more time or energy.</h3>

    <div className="container">
      <div className={styles.premise__comparison}>
        <p>
          With a premium recommendation platform, we are transforming the recommendation experience,
        </p>

        <img src="/sign.svg" alt="Sign"/>

        <p>
          so that as a <u>traveler</u> you can
          <u>get inspired, browse and buy activities with the quality assurance of your hosts</u>
        </p>
      </div>
    </div>
  </section>;
}
