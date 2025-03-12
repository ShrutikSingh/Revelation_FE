import React from "react";
import HexagonCard from "./HexagonCard";
import "./TeamSection.css";

const TeamSection = ({ team, isRightAligned }) => {
  const memberCount = team.members.length;
  const gridClass = `team-${memberCount}`; // Dynamic class based on member count

  return (
    <div className={`team-section ${isRightAligned ? "right" : "left"}`}>
      {!isRightAligned && <div className="team-title">{team.title}</div>}
      
      <div className={`hexagon-grid ${gridClass}`}>
        <div className="hexagon-row">
          {team.members.slice(0, 2).map((member, index) => (
            <HexagonCard key={index} {...member} />
          ))}
        </div>
        {memberCount > 2 && (
          <div className="hexagon-row second-row">
            {team.members.slice(2).map((member, index) => (
              <HexagonCard key={index + 2} {...member} />
            ))}
          </div>
        )}
      </div>

      {isRightAligned && <div className="team-title">{team.title}</div>}
    </div>
  );
};

export default TeamSection;
