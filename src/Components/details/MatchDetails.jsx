import { useEffect, useState } from "react";
import { useCSVData } from "../../utilities/parseScv";
import { useParams } from "react-router";

import Field from "./Field";
import { useData } from "../../utilities/dataContext";


export default function MatchDetails() {
    const matchID = Object.values(useParams())[0];
    const { data: players, loading1 } = useCSVData('players.csv');
    const { data: matches, loading2 } = useCSVData('matches.csv');
    const { data: teams, loading3 } = useCSVData('teams.csv');

    const [loading, setLoading] = useState(true)

    // A random idea ->>>>> \n
    // Instead of calling useCSVData each time in every component I have to try to use createContext and save the data in the local storage
    // so that the whole application can have access to this data instead of fetching it every time in every component it is needed.
    // I need to start coding this idea in parseScv.js - export the function that will handle my idea. TO BE CONTINUED

    const [groupedPlayersByTeamID, setGroupedPlayersByTeamID] = useState([]);

    const [currentMatch, setCurrentMatch] = useState({
        ID: '',
        ATeamID: '',
        BTeamID: '',
        Date: '',
        Score: ''
    });

    useEffect(() => {
        if (matches.length && teams.length) {
            const currentlySelectedMatch = matches.find(m => m.ID === matchID);
            setLoading(false)
            setCurrentMatch(Object.assign({}, currentMatch, currentlySelectedMatch));
            setLoading(true);
            console.log(currentMatch)
            // setCurrentMatch(prev => ({ ...prev, ...currentlySelectedMatch }));
            declarePlayersAndTeams();
            setLoading(false);
        };
    }, [matches, players, teams, loading]);

    const groupingPlayersByTeamID = (data) => {
        return players.reduce((acc, player) => {

            if (!acc[player.TeamID]) {
                acc[player.TeamID] = [];
            }

            acc[player.TeamID].push(player);
            return acc;

        }, {});
    };

    function declarePlayersAndTeams() {
        let playersByTeams = groupingPlayersByTeamID(players);
        setGroupedPlayersByTeamID(Object.values(playersByTeams));

        if (!groupedPlayersByTeamID.length) {
            return <div>Loading...</div>
        }
        // console.log(groupedPlayersByTeamID);
        return groupedPlayersByTeamID;
    };


    if (!players.length || !teams.length || !currentMatch.ID) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h1> Match Details </h1>

            <Field match={currentMatch} key={currentMatch.ID} groupedPlayersByTeamID={groupedPlayersByTeamID} />

        </>
    );
};