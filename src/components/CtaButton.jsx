import { Link } from "react-router-dom";
import styles from "./CtaButton.module.css";

function CtaButton({ to, text }) {
  // Tjekker om det er en ekstern URL eller en mail-adresse
  const isExternal = to.startsWith("http://") || to.startsWith("https://");
  const isMailto = to.startsWith("mailto:");

  return (
    <div className={styles.button}>
      {isExternal || isMailto ? (
        <a
          className={styles.text}
          href={to}
          target={isMailto ? "_self" : "_blank"}
          rel={isMailto ? undefined : "noopener noreferrer"}
        >
          {text}
        </a>
      ) : (
        <Link className={styles.text} to={to}>
          {text}
        </Link>
      )}
    </div>
  );
}

export default CtaButton;
