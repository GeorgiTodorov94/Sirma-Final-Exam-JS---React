import { parseCSV, useCSVData } from "../../utilities/parseScv"

export default function Matches() {

    // const matches = useCSVData('matches.csv')
    const teams = useCSVData('teams.csv')
    const matches = useCSVData('matches.csv')
    const players = useCSVData('players.csv')
    const records = useCSVData('records.csv')
    console.log(teams)
    console.log(matches)
    console.log(players)
    console.log(records)

    return (
        <>

        </>)
}