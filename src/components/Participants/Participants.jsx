import React from "react";
import Element from "./Element";
import "./Participants.css"; // Import external CSS

const Participants = () => {
  return (
    <div className="parti-container">
      <Element number="25" label="TEAM MEMBERS" />
      <Element number="12" label="EVENTS" /> 
      <Element number="500" label="PARTICIPANTS" />
      <Element number="3" label="DAYS" />
    </div>
  );
};

export default Participants;
