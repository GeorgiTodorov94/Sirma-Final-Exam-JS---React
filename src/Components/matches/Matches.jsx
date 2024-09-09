import { useCSVData } from "../../utilities/parseScv"
import MatchCard from "../match-card/MatchCard"

export default function Matches() {

    const teams = useCSVData('teams.csv');
    const matches = useCSVData('matches.csv');
    const players = useCSVData('players.csv');
    const records = useCSVData('records.csv');

    const clubsNames = {};
    teams.data.forEach(team => {
        clubsNames[team.ID] = team.Name;
    });

    const matchesWithClubNames = matches.data.map(match => {
        return {
            ...match,
            ATeamName: clubsNames[match.ATeamID] || 'Unknown Club',
            BTeamName: clubsNames[match.BTeamID] || 'Unknown Club'
        };
    });

    const groupStageEndDate = new Date('2024-06-26');

    const matchesInGroupStages = matchesWithClubNames.filter(match => {
        const matchDate = new Date(match.Date);
        return matchDate <= groupStageEndDate;
    })

    const matchesAfterGroupStages = matchesWithClubNames.filter(match => {
        const matchDate = new Date(match.Date);
        return matchDate > groupStageEndDate;
    })

    const eighthFinalMatches = matchesWithClubNames.filter(match => {
        const startDate = new Date('2024-06-28');
        const endDate = new Date('2024-07-02');
        const matchDate = new Date(match.Date);
        if (matchDate > startDate && matchDate <= endDate) {
            return matchDate;
        }
    })

    const quarterFinals = matchesWithClubNames.filter(match => {
        const startDate = new Date('2024-07-04');
        const endDate = new Date('2024-07-06');
        const matchDate = new Date(match.Date);
        if (matchDate > startDate && matchDate <= endDate) {
            return matchDate;
        }
    })

    const semiFinals = matchesWithClubNames.filter(match => {
        const startDate = new Date('2024-07-08');
        const endDate = new Date('2024-07-11');
        const matchDate = new Date(match.Date);
        if (matchDate > startDate && matchDate <= endDate) {
            return matchDate;
        }
    })

    console.log(matchesWithClubNames);

    // const grandFinal = matchesWithClubNames?.reduce((latest, currentMatch) => {
    //     const latestDate = new Date(latest.Date)
    //     const currentDate = new Date(currentMatch.Date)

    //     return currentDate > latestDate ? currentMatch : latest
    // })



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
                Eight-Finals Stage
            </div>

            <div className="match-card-container">

                {eighthFinalMatches.length > 0 &&
                    (
                        eighthFinalMatches.map(match => <MatchCard key={match.ID} {...match} />)
                    )
                }

                {eighthFinalMatches.length < 0 &&
                    (
                        <div>
                            There is no data available at this moment.
                        </div>
                    )
                }

            </div>

            <div className="group-stages-text-container">
                Quarter-Finals Stage
            </div>

            <div className="match-card-container">

                {quarterFinals.length > 0 &&
                    (
                        quarterFinals.map(match => <MatchCard key={match.ID} {...match} />)
                    )
                }

                {quarterFinals.length < 0 &&
                    (
                        <div>
                            There is no data available at this moment.
                        </div>
                    )
                }
            </div>

            <div className="group-stages-text-container">
                Semi-Finals Stage
            </div>

            <div className="match-card-container">

                {semiFinals.length > 0 &&
                    (
                        semiFinals.map(match => <MatchCard key={match.ID} {...match} />)
                    )
                }

                {semiFinals.length < 0 &&
                    (
                        <div>
                            There is no data available at this moment.
                        </div>
                    )
                }
            </div>

            <div className="group-stages-text-container">
                Grand Final
            </div>

            <div className="match-card-container">
                {/* <MatchCard key={grandFinal.ID} match={grandFinal} /> */}

                {/* // {grandFinal.length > 0 &&
                //     (
                //         grandFinal.map(grandFinal => <MatchCard key={grandFinal.ID} match={grandFinal} />)
                //     )
                // }

                // {grandFinal.length < 0 &&
                //     (
                //         <div>
                //             There is no data available at this moment.
                //         </div>
                //     )
                // } */}
            </div>


        </>
    );
}