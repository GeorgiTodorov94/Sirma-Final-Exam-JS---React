import { useEffect, useState } from "react";
import { useData } from "../../utilities/dataContext";
import MatchCard from "../match-card/MatchCard"

export default function Matches() {

    const { teams, matches } = useData()
    const [currentTeams, setCurrentTeams] = useState([]);
    const [currentMatches, setCurrentMatches] = useState([]);
    useEffect(() => {
        setCurrentTeams(teams.data);
        setCurrentMatches(matches.data)
        // console.log(currentMatches)
        // console.log(currentTeams)
    }, [teams, matches])

    const matchesObject = {
        groupA: [],
        groupB: [],
        groupC: [],
        groupD: [],
        groupE: [],
        groupF: [],
    }


    const findMatchesByGroup = (groupName, teams, matches) => {
        const groupTeams = teams.filter(team => team.Group === groupName);

        const groupTeamIDs = groupTeams.map(team => team.ID);

        const groupMatches = matches.filter(match =>
            groupTeamIDs.includes(match.ATeamID) && groupTeamIDs.includes(match.BTeamID)
        );

        return groupMatches.map(match => {
            const teamA = groupTeams.find(team => team.ID === match.ATeamID);
            const teamB = groupTeams.find(team => team.ID === match.BTeamID);

            return {
                MatchID: match.ID,
                Date: match.Date,
                Score: match.Score,
                TeamA: teamA ? teamA.Name : "Unknown Team",
                TeamB: teamB ? teamB.Name : "Unknown Team",
                ATeamID: teamA.ID,
                BTeamID: teamB.ID
            };
        });
    };

    const groupMatches = (teams, matches) => {
        const groups = [...new Set(teams?.map(team => team.Group))];

        const matchesByGroup = {};

        groups.forEach(group => {
            matchesByGroup[group] = findMatchesByGroup(group, teams, matches);
        });

        return matchesByGroup;
    };

    const groupedMatches = groupMatches(currentTeams, currentMatches);
    const groupKeys = Object.keys(groupedMatches);
    console.log(groupedMatches);
    return (
        <>
            <h1 style={{ color: 'black' }}>Brackets</h1>
            <div className="match-card-container">
                {groupKeys.map((group) => (
                    <div key={group} className="group-stage">
                        <h3 style={{ color: 'black', fontSize: '30px' }}>Group {group}</h3>
                        <div className="group-stage-matches">
                            {groupedMatches[group].map(match => (
                                <MatchCard
                                    key={match.MatchID}
                                    {...match}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

