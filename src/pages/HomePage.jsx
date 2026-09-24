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
            <h1>UX design & Developer</h1>
          </div>
          <p>
            I love creating user-centered design and seeing it come to life
            through prototyping and implementation in code.
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
        <h2>Projects</h2>
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
                A recipe app that combines recipes, pricing, and shopping lists
                into one single app.
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
              <p>
                A webshop featuring fitness clothing to woman of all shapes and
                sizes.
              </p>
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
              <p>
                A website designed to provide a better overview of board games.
              </p>
            </figcaption>
          </button>
          <button className={styles.projectBtn}>
            <figcaption className={styles.projectSumary}>
              <h3>Flere på vej</h3>
              <p>
                Sorry, the website is still not quite finished yet, but here is
                a Figma prototype
              </p>
              <a href="https://www.figma.com/proto/vlDJvPUlwcS3kLaMQIx0wr/Portfolio?node-id=448-22&t=ITjDzUIAfoRbQkPv-1">
                Portfolio
              </a>
            </figcaption>
          </button>
        </div>
      </section>
      <section className={styles.testimonial}>
        <p>
          ”Jeppe has a systematic approach to tasks, which has been a great help
          in streamlining our product framework.
        </p>
        <p>
          Jeppe is responsible, hardworking, loyal, and a truly great colleague.
          We therefore give Jeppe Kristensen our highest recommendations”
        </p>
        <p>- Erik Hein, Manager at the Soldiers' Home</p>
      </section>
    </div>
  );
}

export default HomePage;
