import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <div className={styles.footerContainer}>
        <h3>Kontakt</h3>
        <div className={styles.footerActions}>
          <a className={styles.actionBtn}>
            <h4>Send en mail</h4>
            <span>j.korsgaard.kristensen@gmail.com</span>
          </a>
          <a className={styles.actionBtn}>
            <h4>Kig på min Linkedin</h4>
            <span>/Jeppe Kristensen</span>
          </a>
          <a className={styles.actionBtn}>
            <h4>Ring eller send en SMS</h4>
            <span>+45 30 48 85 23</span>
          </a>
          <a className={styles.actionBtn}>
            <h4>Se min Github</h4>
            <span>@Ranganium</span>
          </a>
        </div>
      </div>
    </div>
  );
}
