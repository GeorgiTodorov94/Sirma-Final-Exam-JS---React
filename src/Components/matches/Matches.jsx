import { parseCSV, useCSVData } from "../../utilities/parseScv"
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
            ATeamName: clubsNames[match.ATeamID] || 'Uknown Club',
            BTeamName: clubsNames[match.BTeamID] || 'Uknown Club'
        };
    });



    return (
        <>
            {matchesWithClubNames.length > 0 &&
                (
                    matchesWithClubNames.map(match => <MatchCard key={match.ID} {...match} />)
                )
            }
        </>)
}