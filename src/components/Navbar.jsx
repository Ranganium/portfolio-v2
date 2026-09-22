import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Importér pakken
import Logo from "../assets/jk-logo.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <Link className={styles.link} to="/">
        Portfolio
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} to="/om-mig">
          Om mig
        </Link>
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
