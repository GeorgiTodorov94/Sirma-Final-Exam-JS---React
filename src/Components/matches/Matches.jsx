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

    const groupStageEndDate = new Date('2024-06-26');

    const matchesInGroupStages = matchesWithClubNames.filter(match => {
        const matchDate = new Date(match.Date);
        return matchDate <= groupStageEndDate
    })

    const matchesAfterGroupStages = matchesWithClubNames.filter(match => {
        const matchDate = new Date(match.Date);
        return matchDate > groupStageEndDate
    })
    console.log(matchesAfterGroupStages)



    return (
        <>
            <div className="group-stages-text-container">
                Group Stages
            </div>

            <div className="match-card-container">

                {matchesInGroupStages.length > 0 &&
                    (
                        matchesInGroupStages.map(match => <MatchCard key={match.ID} {...match} />)
                    )

                }

                {matchesInGroupStages.length < 0 &&
                    (
                        <div>
                            There is no data available at this moment.
                        </div>
                    )
                }
            </div>

            <div className="group-stages-text-container">
                Matches After Group Stages
            </div>

            <div className="match-card-container">

                {matchesAfterGroupStages.length > 0 &&
                    (
                        matchesAfterGroupStages.map(match => <MatchCard key={match.ID} {...match} />)
                    )

                }

                {matchesAfterGroupStages.length < 0 &&
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