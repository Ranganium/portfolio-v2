import styles from "./TechStack.module.css";

// 1. Importér dine ikoner
import illustratorIcon from "../assets/tech-icons/adobe-illustrator.webp";
import cssIcon from "../assets/tech-icons/css.webp";
import figmaIcon from "../assets/tech-icons/figma.webp";
import gitIcon from "../assets/tech-icons/git.webp";
import githubIcon from "../assets/tech-icons/github.webp";
import htmlIcon from "../assets/tech-icons/html.webp";
import jsIcon from "../assets/tech-icons/javascript.webp";
import jitterIcon from "../assets/tech-icons/jitter.webp";
import reactIcon from "../assets/tech-icons/react.webp";
import supabaseIcon from "../assets/tech-icons/supabase.webp";
import fireflyIcon from "../assets/tech-icons/firefly.webp";

// 2. Lav et "lookup"-objekt, der knytter JSON-tekst sammen med det rigtige billede
const techIcons = {
  Illustrator: illustratorIcon,
  CSS: cssIcon,
  Figma: figmaIcon,
  Firefly: fireflyIcon,
  Git: gitIcon,
  GitHub: githubIcon,
  HTML: htmlIcon,
  JavaScript: jsIcon,
  Jitter: jitterIcon,
  React: reactIcon,
  Supabase: supabaseIcon,
};

export default function TechStack({ technologiesUsed }) {
  return (
    <div className={styles.techBar}>
      {technologiesUsed.map((tech, index) => (
        <div key={index} className={styles.techItem}>
          {/* 3. Slå teknologien op i objektet, så den henter det rigtige billede */}
          <img src={techIcons[tech]} alt={tech} title={tech} />
        </div>
      ))}
    </div>
  );
}
