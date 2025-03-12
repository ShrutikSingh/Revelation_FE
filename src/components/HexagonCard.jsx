import React, { useState } from "react";
import "./HexagonCard.css";

const HexagonCard = ({ name, image, linkedin, instagram }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`hexagon-border ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="hexagon">
        <img src={image} alt={name} className="hexagon-image" />
        {hovered && (
          <div className="hexagon-overlay">
            <p className="member-name">{name}</p>
            <div className="social-links">
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
