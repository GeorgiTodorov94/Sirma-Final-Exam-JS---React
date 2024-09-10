import { useCSVData } from "../../utilities/parseScv";



export default function TeamDetails() {

    const players = useCSVData('players.csv');
    const matches = useCSVData('matches.csv');
    const teams = useCSVData('teams.csv');



    return (
        <>
            <h1>Team Details</h1>
            
        </>
    );
};