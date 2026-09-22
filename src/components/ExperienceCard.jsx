import { useState } from "react";
import ImgPoint from "./ImgPoint.jsx";
import plusIcon from "../assets/plus-icon.svg";
import minusIcon from "../assets/minus-icon.svg";

function ExperienceCard({ icon, title, competencies = [], description = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`acordion-point ${isOpen ? "open" : ""}`}>
      <div className="experience-header-content">
        <div className="experience-info">
          <ImgPoint img={icon} point={title} />

          <div className="compentencies">
            <span>Kompetencer:</span>
            {competencies?.map((comp, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                {index >= 0 && <div className="orange-cirkle"></div>}
                <p>{comp}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="toggle-btn" onClick={toggleAccordion}>
          <img
            src={isOpen ? minusIcon : plusIcon}
            alt={isOpen ? "Luk menu" : "Åbn menu"}
          />
        </button>
      </div>

      {isOpen && (
        <div className="acordion-discription">
          {description?.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
