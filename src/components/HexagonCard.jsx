import React, { useState, useEffect } from "react";
import "./HexagonCard.css";

const HexagonCard = ({ name, image, linkedin, instagram }) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 420);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 420);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setHovered(!hovered);
    }
  };

  return (
    <div
      className={`TeamsPage-hexagon-border ${hovered ? "TeamsPage-hovered" : ""}`}
      onMouseEnter={!isMobile ? () => setHovered(true) : undefined}
      onMouseLeave={!isMobile ? () => setHovered(false) : undefined}
      onClick={isMobile ? handleInteraction : undefined}
    >
      <div className="TeamsPage-hexagon">
        <img src={image} alt={name} className="TeamsPage-hexagon-image" />
        {hovered && (
          <div className="TeamsPage-hexagon-overlay">
            <p className="TeamsPage-member-name">{name}</p>
            <div className="TeamsPage-social-links">
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src={"/assets/linkedin.webp"}
                  alt="LinkedIn"
                  onClick={(e) => isMobile && e.stopPropagation()}
                />
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <img
                  src={"/assets/instagram.webp"}
                  alt="Instagram"
                  onClick={(e) => isMobile && e.stopPropagation()}
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HexagonCard;
