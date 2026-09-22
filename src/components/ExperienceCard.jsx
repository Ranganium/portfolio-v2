import { useState } from "react";
import ImgPoint from "./ImgPoint.jsx";
import plusIcon from "../assets/plus-icon.svg";
import minusIcon from "../assets/minus-icon.svg";
import styles from "./ExperienceCard.module.css";

function ExperienceCard({ icon, title, competencies = [], description = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.point} ${isOpen ? styles.open : ""}`}>
      <div className={styles.headerContent}>
        <div className={styles.info}>
          <ImgPoint img={icon} point={title} />

          <div className={styles.competencies}>
            <span>Kompetencer:</span>
            {competencies?.map((comp, index) => (
              <div key={index} className={styles.competency}>
                {index >= 0 && <div className={styles.orangeCircle}></div>}
                <p>{comp}</p>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.toggleButton} onClick={toggleAccordion}>
          <img
            src={isOpen ? minusIcon : plusIcon}
            alt={isOpen ? "Luk menu" : "Åbn menu"}
          />
        </button>
      </div>

      {isOpen && (
        <div className={styles.description}>
          {description?.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
