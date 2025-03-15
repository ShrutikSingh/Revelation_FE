import React from "react";
import HexagonCard from "./HexagonCard";
import "./TeamSection.css";

const TeamSection = ({ team, isRightAligned }) => {
  const memberCount = team.members.length;
  const gridClass = `TeamsPage-team-${memberCount}`; // Dynamic class based on member count

  return (
    <>
    <div>

      {/* here goes you new code for displaying the core members as we desired */}
    </div>
    
    <div className={`TeamsPage-team-section ${isRightAligned ? "TeamsPage-right" : "TeamsPage-left"}`}>
      {!isRightAligned && <div className="TeamsPage-team-title">{team.title}</div>}
      
      <div className={`TeamsPage-hexagon-grid ${gridClass}`}>
        <div className="TeamsPage-hexagon-row">
          {team.members.slice(0, 2).map((member, index) => (
            <HexagonCard key={index} {...member} />
          ))}
        </div>
        {memberCount > 2 && (
          <div className="TeamsPage-hexagon-row TeamsPage-second-row">
            {team.members.slice(2).map((member, index) => (
              <HexagonCard key={index + 2} {...member} />
            ))}
          </div>
        )}
      </div>

      {isRightAligned && <div className="TeamsPage-team-title">{team.title}</div>}
    </div>
    </>
  );
};

export default TeamSection;
