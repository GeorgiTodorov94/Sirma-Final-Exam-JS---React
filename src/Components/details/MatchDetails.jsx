import { useEffect } from "react";
import { useCSVData } from "../../utilities/parseScv"
import Field from "./Field";

export default function MatchDetails() {
    const players = useCSVData('players.csv');
    const records = useCSVData('records.csv');
    const matches = useCSVData('matches.csv');
    const teams = useCSVData('teams.csv')
    console.log(players);
    console.log(matches);
    console.log(teams)


    useEffect(() => {

    })


    return (
        <>
            <h1> Match Details </h1>
            <Field />

        </>
    );
};