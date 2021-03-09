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

          <form action="https://tripel.us1.list-manage.com/subscribe/post?u=30e1f6e953412de54f837ee24&amp;id=4518c3a8c1"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank"
                noValidate className={styles.footer__input}>
            <input type="email" placeholder="Type your email address..." name="EMAIL" id="mce-EMAIL"/>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_30e1f6e953412de54f837ee24_4518c3a8c1" tabIndex={-1} defaultValue=""/>
            </div>
            <button>Sign up</button>
          </form>
        </div>

        <div>
          <img className={styles.footer__illustration} src="/signup.svg" alt="Sign up for our beta program" width="451"
               height="280" loading="lazy"/>
        </div>
      </div>

      <div className={styles.footer__contact}>
        We would be over the moon to answer your questions, contact us with any request at&nbsp;
        <a className={styles.footer__cta} href="mailto:hello@tripel.io">hello@tripel.io</a>
      </div>
    </div>
  </footer>;
}
