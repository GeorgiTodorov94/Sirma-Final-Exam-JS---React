import { useCSVData } from "../../utilities/parseScv"
import MatchCard from "../match-card/MatchCard"

export default function Matches() {

    // const matches = useCSVData('matches.csv')
    const teams = useCSVData('teams.csv');
    const matches = useCSVData('matches.csv');
    const players = useCSVData('players.csv');
    const records = useCSVData('records.csv');
    console.log(matches)
    console.log(teams)

    const clubsNames = {};
    teams.forEach(team => {
        clubsNames[team.ID] = team.Name
    });

    const matchesWithClubNames = matches.map(match => {
        return {
            ...match,
            ATeamName: clubsNames[match.ATeamID] || 'Unknown Club',
            BTeamName: clubsNames[match.BTeamID] || 'Unknown Club'
        };
    });


    return (
        <>
            <div className="group-stages-container">
                Group Stages
            </div>

            <div className="match-card-container">

                {matchesWithClubNames.length > 0 &&
                    (
                        matchesWithClubNames.map(match => <MatchCard key={match.ID} {...match} />)
                    )

                }

                {matchesWithClubNames.length < 0 &&
                    (
                        <div>
                            There is no data available at this moment.
                        </div>
                    )
                }
            </div>
        </>
    );
}