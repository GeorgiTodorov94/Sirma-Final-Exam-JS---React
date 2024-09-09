import { useEffect, useState } from "react";
import { useCSVData } from "../../utilities/parseScv"
import Field from "./Field";

export default function MatchDetails() {
    const [groupedPlayersByTeam, setGroupedPlayersByTeam] = useState([]);
    const players = useCSVData('players.csv');
    const matches = useCSVData('matches.csv');
    const teams = useCSVData('teams.csv');

    const groupPlayersByTeam = (data) => {
        return players.reduce((acc, player) => {

            if (!acc[player.TeamID]) {
                acc[player.TeamID] = []
            }
            acc[player.TeamID].push(player)
            return acc;

        }, {})

    }

    let playersByTeams = [];

    function declarePlayersAndTeams() {
        playersByTeams = groupPlayersByTeam(players);
        setGroupedPlayersByTeam(playersByTeams);
        console.log(groupedPlayersByTeam)
        return groupedPlayersByTeam
    }

    useEffect(() => {
        declarePlayersAndTeams()
    }, [teams, matches, players])



    console.log(Object.entries(groupedPlayersByTeam))


    return (
        <>
            <h1> Match Details </h1>
            <Field />

        </>
    );
};