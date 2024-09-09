import { useEffect, useState } from "react";
import { useCSVData } from "../../utilities/parseScv";
import { useParams } from "react-router";

import Field from "./Field";


export default function MatchDetails() {
    const matchID = Object.values(useParams())[0];

    const players = useCSVData('players.csv');
    const matches = useCSVData('matches.csv');
    const teams = useCSVData('teams.csv');

    // A random idea ->>>>> \n
    // Instead of calling useCSVData each time in every component I have to try to use createContext and save the data in the local storage
    // so that the whole application can have access to this data instead of fetching it every time in every component it is needed.
    // I need to start coding this idea in parseScv.js - export the function that will handle my idea. TO BE CONTINUED

    const [groupedPlayersByTeam, setGroupedPlayersByTeam] = useState([]);
    const [currentMatch, setCurrentMatch] = useState({
        ID: '',
        ATeamID: '',
        BTeamID: '',
        Date: '',
        Score: ''
    });

    useEffect(() => {
        (() => {
            const currentlySelectedMatch = matches.find(m => m.ID === matchID)
            setCurrentMatch(Object.assign({}, currentMatch, currentlySelectedMatch));
            declarePlayersAndTeams();
            console.log(currentMatch);
        })()
    }, [matches, teams]);

    const groupingPlayersByTeamID = (data) => {
        return players.reduce((acc, player) => {

            if (!acc[player.TeamID]) {
                acc[player.TeamID] = [];
            }

            acc[player.TeamID].push(player);
            return acc;

        }, {})
    }

    function declarePlayersAndTeams() {
        let playersByTeams = groupingPlayersByTeamID(players);
        setGroupedPlayersByTeam(Object.values(playersByTeams));
        console.log(groupedPlayersByTeam)
        return groupedPlayersByTeam;
    };

    return (
        <>
            <h1> Match Details </h1>

            <Field match={currentMatch} key={currentMatch.ID} groupedPlayersByTeam={groupedPlayersByTeam} />

        </>
    );
};