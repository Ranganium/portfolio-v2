import { useParams } from "react-router-dom";
import cases from "../data/cases.json";
import dubbleBraidPattern from "../assets/dubble-braid-pattern.svg";
import styles from "./CasePage.module.css";
import TechStack from "../components/TechStack";
import ProductGallery from "../components/ProductGallery";

const projectImages = import.meta.glob(
  "../**/*.{avif,gif,jpeg,jpg,png,svg,webp}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

function resolveProjectImage(imagePath) {
  const normalizedPath = imagePath.replace(/^\/+/, "");
  const image = Object.entries(projectImages).find(([filePath]) =>
    filePath.endsWith(normalizedPath),
  );

  return image?.[1] ?? imagePath;
}

export default function CasePage() {
  // Henter urltitlerne fra cases.json
  const { slug } = useParams();

  // Finder det rigtige projekt i json-filen      c er en placeholder til arrowfunktionen
  const project = cases.find((c) => c.slug.toString() === slug);

  if (!project) {
    return <h2>Project was not found!</h2>;
  }

  return (
    <div className={styles.casePage}>
      <div className={styles.casePageContent}>
        <img src={dubbleBraidPattern} areal-hidden="true" />
        <div className={styles.titleSection}>
          <img
            src={resolveProjectImage(project.projectLogo)}
            alt={`${project.title} logo`}
          />
          <div className={styles.titleContainer}>
            <span>{project.siteType}</span>
            <h1>{project.title}</h1>
          </div>
        </div>
        <div className={styles.introSection}>
          <div className={styles.conceptContainer}>
            <h2>Concept</h2>
            {project.concept.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.technologyUsedContainer}>
            <h2>Technologies used</h2>
            <TechStack technologiesUsed={project.technologiesUsed} />
          </div>
        </div>
        <div className={styles.productImageSection}>
          <ProductGallery
            productImages={project.productImages}
            resolveProjectImage={resolveProjectImage}
          />
        </div>
        <div className={styles.projectLinksSection}>
          <h2>Explore the project</h2>
          <div className={styles.linkContainer}>
            <a className={styles.linkBtn} href={project.projectLinks.prototype}>
              Protoype
            </a>
            <a className={styles.linkBtn} href={project.projectLinks.website}>
              Website
            </a>
            <a
              className={styles.linkBtn}
              href={project.projectLinks.repository}
            >
              Repository
            </a>
          </div>
        </div>
        <img src={dubbleBraidPattern} areal-hidden="true" />
        <div className={styles.contributionsSection}>
          <div className={styles.contributionHeader}>
            <h2>My contributions</h2>
            <div className={styles.tagContainer}>
              {project.contributionTags.map((tag, index) => (
                <div className={styles.tag} key={index}>
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.contributionContent}>
            {project.contributions.map((item, index) => {
              // Tjekker om det er det ulige element (altså det andet element, da index starter ved 0)
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`${styles.contributionItem} ${!isEven ? styles.reversed : ""}`}
                >
                  <div className={styles.contributionText}>
                    <h3>{item.heading}</h3>
                    <p>{item.text}</p>
                  </div>
                  <div className={styles.contributionImage}>
                    <img
                      src={
                        resolveProjectImage
                          ? resolveProjectImage(item.image)
                          : item.image
                      }
                      alt={item.heading}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <img src={dubbleBraidPattern} areal-hidden="true" />
        <div className={styles.reflectionsSection}>
          <h2>My reflections</h2>
          <p>{project.reflections}</p>
        </div>
      </div>
    </div>
  );
}
