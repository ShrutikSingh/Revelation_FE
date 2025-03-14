import React from "react";
import TeamSection from "./TeamSection";
import teamsData from "../data/teams.json"; 
import "./Teams.css";

const Teams = () => {
  return (
      <div className="TeamsPage-teams-container">
      {teamsData.map((team, index) => (
        <TeamSection key={index} team={team} isRightAligned={index % 2 == 0} />
      ))}
    </div>
  );
};

export default Teams;
