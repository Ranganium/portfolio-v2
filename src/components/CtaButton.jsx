import { Link } from "react-router-dom";

function CtaButton({ to, text }) {
  // Tjekker om det er en ekstern URL eller en mail-adresse
  const isExternal = to.startsWith("http://") || to.startsWith("https://");
  const isMailto = to.startsWith("mailto:");

  return (
    <div className="cta-button">
      {isExternal || isMailto ? (
        <a
          className="cta-text"
          href={to}
          target={isMailto ? "_self" : "_blank"}
          rel={isMailto ? undefined : "noopener noreferrer"}
        >
          {text}
        </a>
      ) : (
        <Link className="cta-text" to={to}>
          {text}
        </Link>
      )}
    </div>
  );
}

export default CtaButton;
