import { useNavigate } from "react-router";

import "../../styling/matchCard.css";

export default function FinalCard({
    teamAName,
    teamBName,
    ...finalMatch
}) {

    const [ATeamScore, BTeamScore] = finalMatch.Score.split('-');

    const navigate = useNavigate();

    return (
        <>
            <h1 style={{ color: 'black', backgroundColor: 'lightgreen' }}>GRAND FINAL</h1>
            <div className="match-card-container">
                <div className="match-card">
                    <div className="team team1">
                        <img src="" />
                        <div className="team-info">
                            <h3>{teamBName}</h3>
                            <button onClick={() => navigate(`/team-details/${finalMatch.ATeamID}`)}>Team Details</button>
                        </div>
                    </div>

                    <div className="match-info">
                        <div className={`match-result ${finalMatch.Score === 'WIN' ? 'win' : ''}`}>
                            {`${ATeamScore} - ${BTeamScore}`}
                            {/* Win */}
                        </div>
                        <div className="score">
                            <span>{ATeamScore}</span> : <span>{BTeamScore}</span>
                        </div>
                        <button className="home-label" onClick={() => navigate(`/match-details/${finalMatch.ID}`)}>Match Details</button>
                    </div>

                    <div className="team team2">
                        <img src="" />
                        <div className="team-info">
                            <h3>{teamAName}</h3>
                            <button onClick={() => navigate(`/team-details/${finalMatch.BTeamID}`)}>Team Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};