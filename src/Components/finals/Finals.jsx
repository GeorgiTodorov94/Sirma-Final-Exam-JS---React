import { useData } from "../../utilities/dataContext"
import FinalCard from "../match-card/FinalCard";

export default function Finals() {
    const { teams, matches } = useData();
    console.log(teams.data);
    console.log(matches.data);
    if (!teams.data && !matches.Data) {
        return <div>Loading...</div>
    };



    const finalMatch = matches?.data?.slice(-1)[0];
    const teamAID = finalMatch.ATeamID;
    const teamBID = finalMatch.BTeamID;

    const teamAName = teams.data.find(t => t.ID === teamAID);
    const teamBName = teams.data.find(t => t.ID === teamBID);

    const semiFinalMatches = matches?.data?.slice(-9, -1);
    // to continue with the semifinals and the quarterFinals
    // will create brackets same as Group Stages for them in the Finals component


    return (
        <>
            <FinalCard teamAName={teamAName.Name} teamBName={teamBName.Name}{...finalMatch} />
        </>
    )
}