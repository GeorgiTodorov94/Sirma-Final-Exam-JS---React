import { useData } from "../../utilities/dataContext";

import FinalCard from "../match-card/FinalCard";

import MatchCard from "../match-card/MatchCard";

export default function Finals() {
    const { teams, matches } = useData();

    if (!teams.data && !matches.Data) {
        return <div>Loading...</div>
    };

    const finalMatch = matches?.data?.slice(-1)[0];

    const teamAID = finalMatch.ATeamID;
    const teamBID = finalMatch.BTeamID;

    const teamAName = teams.data.find(t => t.ID === teamAID);
    const teamBName = teams.data.find(t => t.ID === teamBID);


    const semiFinals = matches?.data?.slice(-3, -1);
    const quarterFinals = matches?.data?.slice(-7, -3);
    const eightFinals = matches?.data?.slice(-15, -7);

    const finalsArr = {
        "Eight Finals": eightFinals,
        "Quarter Finals": quarterFinals,
        "Semi Finals": semiFinals,
    };

    const groupKeys = Object.keys(finalsArr);

    const findTeamNameByID = (() => {
        groupKeys.map(key => {
            finalsArr[key].map(match => {
                const teamA = teams.data.find(team => match.ATeamID === team.ID);
                match.TeamA = teamA.Name
                const teamB = teams.data.find(team => match.BTeamID === team.ID);
                match.TeamB = teamB.Name
                match.MatchID = match.ID
            });
        });
        return finalsArr;
    })();

    // console.log(finalsArr);




    return (
        <>
            <h1 style={{ color: 'black' }}>Finals</h1>
            <div className="finals-card-container">
                {groupKeys.map((group) => (
                    <div key={group} className="finals-stage">
                        <h3 style={{ color: 'black', fontSize: '30px' }}>{group}</h3>
                        <div className="finals-stage-matches">
                            {finalsArr[group].map(match => (
                                <MatchCard
                                    key={match.ID}
                                    {...match}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <FinalCard teamAName={teamAName.Name} teamBName={teamBName.Name}{...finalMatch} />

        </>
    )
}