import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <div className={styles.footerContainer}>
        <h3>Kontakt</h3>
        <div className={styles.footerActions}>
          {/* Mail åbner i samme fane (standard for mailto) */}
          <a
            href="mailto:j.korsgaard.kristensen@gmail.com"
            className={styles.actionBtn}
          >
            <h4>Send en mail</h4>
            <span>j.korsgaard.kristensen@gmail.com</span>
          </a>

          {/* LinkedIn åbner i ny fane */}
          <a
            href="https://www.linkedin.com/in/jeppe-kristensen-548240427/"
            target="_blank"
            rel="noreferrer"
            className={styles.actionBtn}
          >
            <h4>Linkedin</h4>
            <span>/Jeppe Kristensen</span>
          </a>

          {/* Telefon åbner i samme fane (standard for tel) */}
          <a href="tel:+4530488523" className={styles.actionBtn}>
            <h4>Call or SMS</h4>
            <span>+45 30 48 85 23</span>
          </a>

          {/* GitHub åbner i ny fane */}
          <a
            href="https://github.com/Ranganium"
            target="_blank"
            rel="noreferrer"
            className={styles.actionBtn}
          >
            <h4>Github</h4>
            <span>@Ranganium</span>
          </a>
        </div>
      </div>
    </div>
  );
}
