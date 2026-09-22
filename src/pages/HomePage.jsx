import heroPattern from "../assets/hero-pattern.svg";
import scrollArrow from "../assets/scroll-arrow.svg";
import { Link } from "react-router-dom";
import CtaButton from "../components/CtaButton.jsx";
import flowerPattern from "../assets/flower-pattern.svg";
import toastLogo from "../assets/mer-end-toast-logo.svg";
import cirklePattern from "../assets/cirkle-pattern.svg";
import uniquelyHerLogo from "../assets/uniquely-her-logo.svg";
import halfcirklePattern from "../assets/halfcirkle-pattern.svg";
import spilcafeLogo from "../assets/spilcafe-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";
import mailLogo from "../assets/mail-logo.svg";

function HomePage() {
  return (
    <div className="homepage">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>JEPPE KRISTENSEN</h1>
            <p>
              Jeg kan godt lide finde ud af, hvordan ting fungerer, så jeg selv
              kan lave <br />
              det. Jeg brænder for at skabe brugercentrerede digitale <br />
              løsninger.
            </p>
            <CtaButton to="/om-mig" text="Læs mere om mig" />
          </div>

          <img className="hero-pattern" src={heroPattern} aria-hidden="true" />
        </div>
        <div className="hero-scroll" aria-hidden>
          <div></div>
          <img src={scrollArrow} />
          <span>SCROLL</span>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-section" id="projekter">
        <h2>Projekter</h2>

        {/* MER' END TOAST */}
        <div className="project-wrapper">
          <img
            className="project-pattern"
            src={flowerPattern}
            aria-hidden="true"
          />
          <div className="project-content">
            <img
              className="project-logo"
              src={toastLogo}
              alt="Mer' end Toast"
            />
            <div className="project-text">
              <h3>mer' end toast</h3>
              <p>
                Opskriftapp, som samler opskrifter, pris og indkøbsliste i én
                app
              </p>
              <p>
                <strong>Min rolle:</strong> UX/UI-design, Research, Supabase,
                Frontend Udvilling.
              </p>
              <p>
                <strong>Teknologier:</strong> React, HTML, CSS, JavaScript,
                Lottie...
              </p>
              <CtaButton to="/projekter/mer-end-toast" text="læs mere" />
            </div>
          </div>
        </div>

        {/* UNIQUELY HER */}
        <div className="project-wrapper-right">
          <img
            className="project-pattern-right"
            src={cirklePattern}
            aria-hidden="true"
          />
          <div className="project-content-right">
            <img
              className="project-logo"
              src={uniquelyHerLogo}
              alt="Uniquely Her"
            />
            <div className="project-text-right">
              <h3>Uniquely Her</h3>
              <p>Webshop med træningstøj til kvinder i alle former</p>
              <p>
                <strong>Min rolle:</strong> UX/UI-design, Research, Frontend
                Udvilling.
              </p>
              <p>
                <strong>Teknologier:</strong> HTML, CSS, JavaScript, Figma...
              </p>
              <CtaButton to="/projekter/uniquely-her" text="læs mere" />
            </div>
          </div>
        </div>

        {/* SPILCAFÉEN */}
        <div className="project-wrapper">
          <img
            className="project-pattern"
            src={halfcirklePattern}
            aria-hidden="true"
          />
          <div className="project-content">
            <img className="project-logo" src={spilcafeLogo} alt="Spilcaféen" />
            <div className="project-text">
              <h3>Spilcaféen</h3>
              <p>webside til at overskueliggøre brætspiloversigt</p>
              <p>
                <strong>Min rolle:</strong> UX/UI-design, Research, Frontend
                Udvilling.
              </p>
              <p>
                <strong>Teknologier:</strong> HTML, CSS, JavaScript, Figma...
              </p>
              <CtaButton to="/projekter/spilcafeen" text="læs mere" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="kontakt">
        <h2>Kontakt</h2>
        <div className="contact-content">
          <p>
            Hvis du skulle være interesseret i at arbejde sammen, så kan du
            kontakte mig på de her medier
          </p>
          <div className="contact-info-wrapper">
            <div
              href="https://www.linkedin.com/in/jeppe-kristensen-548240427"
              className="contact-info-container"
            >
              <img src={linkedinLogo} alt="LinkedIn" />
              <CtaButton
                to="https://www.linkedin.com/in/jeppe-kristensen-548240427"
                text="Jeppe Kristensen"
              />
            </div>
            <div
              href="mailto:j.korsgaard.kristensen@gmail.com"
              className="contact-info-container"
            >
              <img src={mailLogo} alt="gmail" />
              <CtaButton
                to="mailto:j.korsgaard.kristensen@gmail.com"
                text="j.korsgaard.kristensen@gmail.com"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
