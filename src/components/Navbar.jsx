import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Importér pakken
import Logo from "../assets/logos/jk-logo.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link style={{ width: `100%`, "max-width": `250px` }} to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <Link className={styles.link} to="/">
        Portfolio
      </Link>
      <div className={styles.links}>
        {/* <Link className={styles.link} to="/om-mig">
          Om mig
        </Link> */}
        <a
          href="https://www.figma.com/proto/vlDJvPUlwcS3kLaMQIx0wr/Portfolio?node-id=780-3222&t=MQjCizHK097n62JJ-1"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Om mig
        </a>
        <div className={styles.contact}>
          <HashLink smooth className={styles.link} to="/#footer">
            Kontakt
          </HashLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
