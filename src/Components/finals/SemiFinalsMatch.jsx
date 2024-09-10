import { useData } from "../../utilities/dataContext"
import FinalCard from "../match-card/FinalCard";

export default function SemiFinalsMatch() {
    const { teams, matches } = useData();
    console.log(teams.data);
    console.log(matches.data);
    if (!teams.data && !matches.Data) {
        return <div>Loading...</div>
    };

    const finalMatch = matches?.data?.slice(-1, -9)[0];
    console.log(finalMatch)
    // const teamAID = finalMatch.ATeamID;
    // const teamBID = finalMatch.BTeamID;

    // const teamAName = teams.data.find(t => t.ID === teamAID);
    // const teamBName = teams.data.find(t => t.ID === teamBID);

    return (
        <>
            <FinalCard />
        </>
    )
}