import React, { useState } from "react";
import "./HexagonCard.css";

const HexagonCard = ({ name, image, linkedin, instagram }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`TeamsPage-hexagon-border ${hovered ? "TeamsPage-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="TeamsPage-hexagon">
        <img src={image} alt={name} className="TeamsPage-hexagon-image" />
        {hovered && (
          <div className="TeamsPage-hexagon-overlay">
            <p className="TeamsPage-member-name">{name}</p>
            <div className="TeamsPage-social-links">
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <img src={"/assets/linkedin.png"} alt="LinkedIn" />
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <img src={"/assets/instagram.png"} alt="Instagram" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HexagonCard;
