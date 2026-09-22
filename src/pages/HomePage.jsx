import heroPattern from "../assets/hero-pattern.svg";
import scrollArrow from "../assets/scroll-arrow.svg";
import CtaButton from "../components/CtaButton.jsx";
import flowerPattern from "../assets/flower-pattern.svg";
import toastLogo from "../assets/mer-end-toast-logo.png";
import cirklePattern from "../assets/cirkle-pattern.svg";
import uniquelyHerLogo from "../assets/uniquely-her-logo.png";
import halfcirklePattern from "../assets/halfcirkle-pattern.svg";
import spilcafeLogo from "../assets/spilcafe-logo.png";
import linkedinLogo from "../assets/linkedin-logo.svg";
import mailLogo from "../assets/mail-logo.svg";
import styles from "./HomePage.module.css";
import dubbleBraidPattern from "../assets/dubble-braid-pattern.svg";
import heroPicture from "../assets/mig-fra-siden.png";

function HomePage() {
  return (
    <div className={styles.homepage}>
      <img
        src={dubbleBraidPattern}
        className={styles.dubbleBraidPattern}
        aria-hidden="true"
      />
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeaderContent}>
            <h2>Jeppe Kristensen</h2>
            <h1>UX design & Udvikler</h1>
          </div>
          <p>
            Jeg elsker at lave brugercentreret design og se det komme til live
            med prototyping og implementering i kode.
          </p>
        </div>
        <img
          className={styles.heroPicture}
          src={heroPicture}
          alt="billede af Jeppe Kristensen"
        />
      </section>
      <img
        src={dubbleBraidPattern}
        className={styles.dubbleBraidPattern}
        aria-hidden="true"
      />
      <section className={styles.projectsSection}>
        <h2>Projekter</h2>
        <div className={styles.projectBtnContainer}>
          <button
            className={styles.projectBtn}
            style={{ "--hover-bg": "#FBC41B" }}
          >
            <img src={toastLogo} alt="Mer' end Toast" />
            <figcaption className={styles.projectSumary}>
              <span>Webapp</span>
              <h3>Mer' end Toast</h3>
              <p>
                Opskriftapp, som samler opskrifter, pris og indkøbsliste i én
                app
              </p>
            </figcaption>
          </button>
          <button
            className={styles.projectBtn}
            style={{ "--hover-bg": "#E66A9D" }}
          >
            <img src={uniquelyHerLogo} alt="Uniquely her" />
            <figcaption className={styles.projectSumary}>
              <span>Webshop</span>
              <h3>Uniquely her</h3>
              <p>Webshop med træningstøj til kvinder i alle former</p>
            </figcaption>
          </button>
          <button
            className={styles.projectBtn}
            style={{ "--hover-bg": "#BF181D" }}
          >
            <img src={spilcafeLogo} alt="Spilcaféen" />
            <figcaption className={styles.projectSumary}>
              <span>Website</span>
              <h3>Spilcaféen</h3>
              <p>Webside til at overskueliggøre brætspiloversigt</p>
            </figcaption>
          </button>
          <button className={styles.projectBtn}>
            <figcaption className={styles.projectSumary}>
              <h3>Flere på vej</h3>
              <p>Jeg vil opdatere listen, når jeg laver flere projekter</p>
            </figcaption>
          </button>
        </div>
      </section>
      <section className={styles.testimonial}>
        <p>
          ”Jeppe har en systematisk tilgang til opgaver, og det har været en
          stor hjælp i forhold til effektiviseringen af vores produktramme.
        </p>
        <p>
          Jeppe er ansvarlig, arbejdsom, loyal og en rigtig god kollega. Vi kan
          derfor give Jeppe Kristensen vores bedste anbefalinger”
        </p>
        <p>- Erik Hein, Soldaterhjemsleder</p>
      </section>
    </div>
  );
}

export default HomePage;
