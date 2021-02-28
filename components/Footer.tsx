import styles from '../styles/Footer.module.css';

export default function Footer() {
  return <footer className={styles.footer}>
    <div className="container">
      <div className={styles.footer__signup}>
        <div>
          <h4>
            Sign up for our beta program
          </h4>

          <p>
            Join our platform as an early user and let us build the platform around your specific needs
          </p>

          <div className={styles.footer__input}>
            <input type="email" placeholder="Type your email address..."/>
            <button>Sing up</button>
          </div>
        </div>

        <div>
          <img className={styles.footer__illustration} src="/signup.svg" alt="Sign up for our beta program"/>
        </div>
      </div>

      <div className={styles.footer__contact}>
        We would be over the moon to answer your questions, contact us with any request at&nbsp;
        <a className={styles.footer__cta} href="mailto:hello@tripel.io">hello@tripel.io</a>
      </div>
    </div>
  </footer>
}
