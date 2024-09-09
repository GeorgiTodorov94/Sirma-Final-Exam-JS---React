import { useCSVData } from "../../utilities/parseScv"
import Field from "./Field";

export default function MatchDetails() {
    const players = useCSVData('players.csv');
    const records = useCSVData('records.csv');
    console.log(players);
    console.log(records);


    return (
        <>
            <h1> Match Details </h1>
            <Field />

        </>
    );
};