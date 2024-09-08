import "../../styling/matchCard.css"

export default function MatchCard({
    team1,
    team2,
    team1Score,
    team2Score,
    team1Country,
    team2Country,
    matchResult
}) {
    return (
        <div className="match-card">
            <div className="team team1">
                <img src='' />
                <div className="team-info">
                    <h3>Georgi</h3>
                    <p>Georgi</p>
                </div>
            </div>

            <div className="match-info">
                <div className="match result win">
                    {/* {matchResult} */}
                    Win
                </div>
                <div className="score">
                    <span>0</span> : <span>2</span>
                </div>
                <p className="home-label">HOME</p>
            </div>

            <div className="team team2">
                <img src="" />
                <div className="team-info">
                    <h3>Georgi</h3>
                    <p>Georgi</p>
                </div>
            </div>
        </div>
    )
}