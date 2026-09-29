import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Importér pakken
import Logo from "../assets/logos/jk-logo.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link style={{ width: `100%`, "max-width": `300px` }} to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <Link className={styles.link} to="/">
        Portfolio
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} to="/about">
          About
        </Link>
        <div className={styles.contact}>
          <HashLink smooth className={styles.link} to="/#footer">
            Contact
          </HashLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
