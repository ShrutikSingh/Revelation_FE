import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h2 className="hero-subtitle">Meet the <span>MASTERMINDS</span></h2>
      <h1 className="hero-title">
        <span className="bracket"><img src="./assets/title-border.png" alt="border" /></span> TEAM REVELATION <span className="bracket"><img src="./assets/title-border.png" alt="border" /></span>
      </h1>
      <div className="hero-description">
        <p>This is about the teams, some intro text that you can add to create the hype of the showing teams and all. This is about the teams.</p>
      </div>
    </div>
  );
};

export default HeroSection;
