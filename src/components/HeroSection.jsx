import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="TeamsPage-hero-section">
      <h2 className="TeamsPage-hero-subtitle">Meet the <span>MASTERMINDS</span></h2>
      <h1 className="TeamsPage-hero-title">
        <span className="TeamsPage-bracket">
          <img src="./assets/title-border.webp" alt="border" />
        </span> 
        TEAM REVELATION 
        <span className="TeamsPage-bracket">
          <img src="./assets/title-border.webp" alt="border" />
        </span>
      </h1>
      <div className="TeamsPage-hero-description">
        <p>
        A strong vision is nothing without the people who bring it to reality. Meet the dedicated individuals who drive our initiatives forward - leaders, innovators, and collaborators working together to turn ideas into reality. Their passion, teamwork, and excellence shape the foundation of everything we do. Get to know the minds behind our success!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
