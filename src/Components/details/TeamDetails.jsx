import { useCSVData } from "../../utilities/parseScv";


export default function TeamDetails() {

    const players = useCSVData('players.csv');
    const matches = useCSVData('matches.csv');
    const teams = useCSVData('teams.csv');

    return (
        <>
            <h1>Team Details</h1>

            {/* 
            Need to Display here The full Team Details taken from the CSV Files
                Number of Players
                Name of Players
                Goal of Each Player
                Total Club Matches Played in the Tournament
                Manager Name
                And anything else that can be calculated or taken from the CSV Files
                ...................
            */}


        </>
    );
};