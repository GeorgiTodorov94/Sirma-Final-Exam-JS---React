import "../../styling/matchCard.css"

export default function MatchCard({ ...match }) {
    console.log(match.Date)
    console.log(match.Score)
    const [ATeamScore, BTeamScore] = match.Score.split('-')
    console.log(ATeamScore, BTeamScore)
    return (

        <div className="match-card">
            <div className="team team1">
                <img src='' />
                <div className="team-info">
                    <h3>{match.ATeamName}</h3>
                    <p>Georgi</p>
                </div>
            </div>

            <div className="match-info">
                <div className="match result win">
                    {match.Score.split(' - ')}
                    {/* Win */}
                </div>
                <div className="score">
                    <span>{ATeamScore}</span> : <span>{BTeamScore}</span>
                </div>
                <p className="home-label">HOME</p>
            </div>

            <div className="team team2">
                <img src="" />
                <div className="team-info">
                    <h3>{match.BTeamName}</h3>
                    <p>Georgi</p>
                </div>
            </div>
        </div>
    )
}