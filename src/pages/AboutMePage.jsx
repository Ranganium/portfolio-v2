// Mønster
import dubbleBraidPattern from "../assets/dubble-braid-pattern.svg";
// billede
import JeppeBillede from "../assets/jeppe-billede.jpg";
// Logoer og ikoner
import figmaLogo from "../assets/tech-icons/figma.webp";
import illustratorLogo from "../assets/tech-icons/adobe-illustrator.webp";
import cssLogo from "../assets/tech-icons/css.webp";
import htmlLogo from "../assets/tech-icons/html.webp";
import reactLogo from "../assets/tech-icons/react.webp";
import javascriptLogo from "../assets/tech-icons/javascript.webp";
import githubLogo from "../assets/tech-icons/github.webp";
import gitLogo from "../assets/tech-icons/git.webp";
import trainingIcon from "../assets/other-icons/training-icon.svg";
import gameIcon from "../assets/other-icons/game-icon.svg";
import bakingIcon from "../assets/other-icons/baking-icon.svg";
import questioningIcon from "../assets/other-icons/questioning-icon.svg";

import educationIcon from "../assets/other-icons/education-icon.svg";
import workIcon from "../assets/other-icons/work-icon.svg";
import europeanIcon from "../assets/other-icons/european-icon.svg";

// props
import ImgPoint from "../components/ImgPoint.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";
import styles from "./AboutMePage.module.css";

function AboutMePage() {
  return (
    <div className={styles.aboutPage}>
      <img src={dubbleBraidPattern} aria-hidden="true" />
      <h1>Who am I</h1>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutColumn}>
          <div className={styles.aboutBio}>

        <div className={styles.aboutColumn}>

          <div className={styles.experienceBox}>
            <h3>Erfaring</h3>
            <ExperienceCard
              icon={educationIcon}
              title="HTX-linje Kommunikation & IT"
              competencies={["Testmetoder", "Digital design", "Samarbejde"]}
              description={[
                "Jeg gik 3 år på HTX i Skjern (2021-2024) med linjen Kommunikation og IT, hvor vi lavede grafisk design og print design i Adobe Illustrator og andre programmer.",
                "Jeg havde Digital Design & Udvikling som teknikfag. Her skulle man lave spil i Unity. I mit team fungerede jeg hovedsageligt som designer af de forskellige dele af spillet.",
              ]}
            />
            <ExperienceCard
              icon={workIcon}
              title="Butiksmedarbejder i købmand"
              competencies={["Ansver", "Kundeservice", "oplæring"]}
              description={[
                "Jeg arbejdede 2,5 år ved Ådum købmand (2022-2024), hvor jeg virkelig lærte ansvar og glæden ved at glæde andre.",
                "Kundeservice var top prioritet og jeg har haft mange snakke med forskellige slags kunder lige fra fulde svajende mænd til virkelig alene gamle folk uden andre.",
              ]}
            />
            <ExperienceCard
              icon={null}
              title="Volontør på KFUM soldaterhjem"
              competencies={["Samarbejde", "Selvrealisering"]}
              description={[
                "Jeg var volontør på KFUM Soldaterhjem i Varde i 5 måneder i 2024. Min hovedsagelige rolle var at lave grillmad til soldater, som bestilte. Derudover var jeg også med ude på skydebanerne og solgte mad der, når nogen bestilte vognen.",
                "Jeg lavede dog andet arbejde, fordi lederen troede på at man skulle lave det man var god til. Jeg var mest i opvasken, blev også sat til at lave den daglige kage og designe nye skilte dertil. Han er også kommet med en anbefaling.",
                "Jeppe har en systematisk tilgang til opgaver, og det har været en stor hjælp i forhold til effektiviseringen af vores produktramme.",
                "Jeppe er ansvarlig, arbejdsom, loyal og en rigtig god kollega. Vi kan derfor give Jeppe Kristensen vores bedste anbefalinger” - Erik Hein, Soldaterhjemsleder",
              ]}
            />
            <ExperienceCard
              icon={europeanIcon}
              title="Internationalt projekt/ ERASMUS+"
              competencies={["Kulturforståelse"]}
              description={[
                "Vi har haft et tværkulturelt projekt med studerende fra Holland, hvor vi skulle lave en oplevelse, som skulle fremme kulturel forståelse.",
                "Derudover har jeg været på et udvekslingsforløb med nogle elever fra Italien, hvor vi tog til Italien og oplevede deres kultur ved at bo individuelt ved deres familier.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
