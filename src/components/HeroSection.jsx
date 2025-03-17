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
          This is about the teams, some intro text that you can add to create 
          the hype of the showing teams and all. This is about the teams.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
