import React from "react";
import HexagonCard from "./HexagonCard";
import "./TeamSection.css";

const TeamSection = ({ team, coreTeams, isRightAligned }) => {
  return (
    <>
      {/* Core Members Section (Only Render if coreTeams is Passed) */}
      {coreTeams && (
        <div className="TeamsPage-core-members">
          <h2 className="TeamsPage-core-title">Core Committee</h2>
          <div className="TeamsPage-core-grid">
            {coreTeams[0].members.map((member, index) => (
              <div key={index} className="TeamsPage-core-card">
                <HexagonCard {...member} />
                <div className="TeamsPage-core-position">{member.position}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Teams Section */}
      {team && (
        <div className={`TeamsPage-team-section ${isRightAligned ? "TeamsPage-right" : "TeamsPage-left"}`}>
          {!isRightAligned && <div className="TeamsPage-team-title">{team.title}</div>}
          
          <div className={`TeamsPage-hexagon-grid TeamsPage-team-${team.members.length}`}>
            <div className="TeamsPage-hexagon-row">
              {team.members.slice(0, 2).map((member, index) => (
                <HexagonCard key={index} {...member} />
              ))}
            </div>
            {team.members.length > 2 && (
              <div className="TeamsPage-hexagon-row TeamsPage-second-row">
                {team.members.slice(2).map((member, index) => (
                  <HexagonCard key={index + 2} {...member} />
                ))}
              </div>
            )}
          </div>

          {isRightAligned && <div className="TeamsPage-team-title">{team.title}</div>}
        </div>
      )}
    </>
  );
};

export default TeamSection;
