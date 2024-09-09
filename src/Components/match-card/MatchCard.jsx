import { useNavigate } from "react-router"

import "../../styling/matchCard.css"

export default function MatchCard({ ...match }) {

    const [ATeamScore, BTeamScore] = match.Score.split('-');
    const navigate = useNavigate();
    // console.log(match);


    return (

        <div className="match-card">
            <div className="team team1">
                <img src='' />
                <div className="team-info">
                    <h3>{match.ATeamName}</h3>
                    <button onClick={() => navigate(`/team-details/${match.ATeamID}`)}>Team Details</button>
                </div>
            </div>

            <div className="match-info">
                <div className={`match-result ${match.Score === 'WIN' ? 'win' : ''}`}>
                    {`${ATeamScore} - ${BTeamScore}`}
                    {/* Win */}
                </div>
                <div className="score">
                    <span>{ATeamScore}</span> : <span>{BTeamScore}</span>
                </div>
                <button className="home-label" onClick={() => navigate(`/match-details/${match.ID}`)}>Match Details</button>
            </div>

            <div className="team team2">
                <img src="" />
                <div className="team-info">
                    <h3>{match.BTeamName}</h3>
                    <button onClick={() => navigate(`/team-details/${match.BTeamID}`)}>Team Details</button>
                </div>
            </div>
        </div>
    )
}