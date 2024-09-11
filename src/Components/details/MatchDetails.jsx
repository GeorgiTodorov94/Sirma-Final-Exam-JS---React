import { useEffect, useState } from "react";
import { useCSVData } from "../../utilities/parseScv";
import { useParams } from "react-router";

import Field from "../fields/Field";
import { useData } from "../../utilities/dataContext";


export default function MatchDetails() {
    const matchID = Object.values(useParams())[0];
    const { data: players } = useCSVData('players.csv');
    const { data: matches } = useCSVData('matches.csv');
    const { data: teams } = useCSVData('teams.csv');

    const [loading, setLoading] = useState(true);


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
            setCurrentMatch(Object.assign({}, currentMatch, currentlySelectedMatch));
            // setCurrentMatch(prev => ({ ...prev, ...currentlySelectedMatch }));
            declarePlayersAndTeams();
        };
    }, [matches, players, teams, loading]);
    console.log(currentMatch);

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
        // console.log(playersByTeams)
        setGroupedPlayersByTeamID(Object.values(playersByTeams));

        if (!groupedPlayersByTeamID.length) {
            return <div>Loading...</div>
        }
        // console.log(groupedPlayersByTeamID);
        return groupedPlayersByTeamID;
    };


    if (!players.length || !teams.length || !currentMatch.ID) {
        return <div>Loading...</div>
    };

    return (
        <>
            <h1 className="match-details-header"> Match Details </h1>

            <Field match={currentMatch} key={currentMatch.ID} groupedPlayersByTeamID={groupedPlayersByTeamID} />

        </>
    );
};