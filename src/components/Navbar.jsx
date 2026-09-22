import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Importér pakken
import Logo from "../assets/jk-logo.svg";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div>
        <Link className="nav-text" to="/">
          Hjem
        </Link>

        <HashLink className="nav-text" to="/#projekter">
          Projekter
        </HashLink>

        <Link className="nav-text" to="/om-mig">
          Om mig
        </Link>

        <div className="cta-button">
          <HashLink className="nav-text" to="/#kontakt">
            Kontakt
          </HashLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
