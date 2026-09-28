import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import dubbleBraidPattern from "../assets/dubble-braid-pattern.svg";
import heroPicture from "../assets/mig-fra-siden.png";
import cases from "../data/cases.json";

// Automatisk billedopløser til dine logoer
const projectImages = import.meta.glob(
  "../**/*.{avif,gif,jpeg,jpg,png,svg,webp}",
  { eager: true, import: "default", query: "?url" },
);

function resolveProjectImage(imagePath) {
  const normalizedPath = imagePath.replace(/^\/+/, "");
  const image = Object.entries(projectImages).find(([filePath]) =>
    filePath.endsWith(normalizedPath),
  );
  return image?.[1] ?? imagePath;
}

export default function HomePage() {
  const navigate = useNavigate();

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

      {/* PROJECTS SECTION */}
      <section className={styles.projectsSection}>
        <h2>Projects</h2>
        <div className={styles.projectBtnContainer}>
          {cases.map((project) => (
            <button
              key={project.id}
              className={styles.projectBtn}
              style={{ "--hover-bg": project.buttonColor }}
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              <img
                src={resolveProjectImage(project.projectLogo)}
                alt={project.title}
              />
              <figcaption className={styles.projectSumary}>
                <span>{project.siteType}</span>
                <h3>{project.title}</h3>
                <p>{project.buttonSummary}</p>
              </figcaption>
            </button>
          ))}

          {/* Statisk knap til "Flere på vej" */}
          <button className={styles.projectBtn}>
            <figcaption className={styles.projectSumary}>
              <h3>More cases will come here</h3>
              <p>
                I'll try to keep the portfolio updated when i make new projects
              </p>
            </figcaption>
          </button>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
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
