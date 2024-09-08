import { parseCSV, useCSVData } from "../../utilities/parseScv"
import MatchCard from "../match-card/MatchCard"

export default function Matches() {

    // const matches = useCSVData('matches.csv')
    const teams = useCSVData('teams.csv');
    const matches = useCSVData('matches.csv');
    const players = useCSVData('players.csv');
    const records = useCSVData('records.csv');


    return (
        <>
            {matches.length > 0 &&
                (
                    matches.map(match => <MatchCard key={match.ID} {...match} />)

                )
            }
        </>)
}