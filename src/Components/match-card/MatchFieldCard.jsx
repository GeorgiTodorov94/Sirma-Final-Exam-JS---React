import { useNavigate, useParams } from "react-router"

import "../../styling/matchFieldCard.css"

export default function MatchFieldCard({
    team,
    ...match
}) {
    const navigate = useNavigate();
    // console.log(team)
    const [ATeamScore, BTeamScore] = match.match.Score.split('-');

    return (
        <div className="field-match-card">
            <div className="fieldTeam team1">
                <img src="" />
                <div className="field-team-info">
                    <h3>{team.teamA.Name}</h3>
                    <h3 style={{ fontSize: '10px' }}>
                        Club Manager  -
                    </h3>
                    {team.teamA.ManagerFullName}
                </div>
            </div>

            <div className="match-info">
                <div style={{ padding: '10px' }} className={`field-match-result ${match.match.Score === 'WIN' ? 'win' : ''}`}>
                    <h3>Played On</h3>
                    {`${match.match.Date}`}
                    {/* Win */}
                </div>
                <div className="field-score">
                    <span>{ATeamScore}</span> : <span>{BTeamScore}</span>
                </div>


                {/* <button className="field-home-label" onClick={() => navigate(`/match-details/${match.match.ID}`)}>Match Details</button> */}
            </div>

            <div className="fieldTeam team2">
                <img src="" />
                <div className="field-team-info">
                    <h3>{team.teamB.Name}</h3>
                    <h3 style={{ fontSize: '10px' }}>
                        Club Manager  -
                    </h3>
                    {team.teamB.ManagerFullName}
                </div>
            </div>
        </div>
    );
};