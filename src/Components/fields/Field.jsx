import { useParams } from 'react-router';
import { useCSVData } from "../../utilities/parseScv";
import { useEffect, useState } from 'react';

import '../../styling/field.css';
import { useData } from '../../utilities/dataContext';
import FieldA from './FieldA';
import FieldB from './FieldB';

export default function Field({
    match,
    groupedPlayersByTeamID,
}) {

    const [currentData, setCurrentData] = useState({})
    const matchID = Object.values(useParams())[0];
    const { teams, players, matches } = useData();
    // console.log(teams.data)
    // console.log(players.data)
    // console.log(matches.data)

    useEffect(() => {
        setCurrentData(prev => ({
            ...prev,
            teams: teams.data,
            currentMatch: match,
            clubPlayers: groupedPlayersByTeamID
        }));
    }, [match, teams.data, matches.data, players.data, matchID]);


    if (!currentData.teams?.length || !currentData.currentMatch || !currentData.clubPlayers) {
        return <div>Loading...</div>;
    }


    const getMatchTeams = () => {

        const teamA = currentData?.teams.find(t => t.ID === currentData?.currentMatch.ATeamID);
        // console.log(teamA)
        const teamB = currentData?.teams.find(t => t.ID === currentData?.currentMatch.BTeamID);
        // console.log(teamB)


        const teamAPlayers = currentData?.clubPlayers[teamA?.ID] || 'Undefined';
        // console.log(teamAPlayers)
        const teamBPlayers = currentData?.clubPlayers[teamB?.ID] || 'Undefined';
        // console.log(teamBPlayers)

        return {
            teamA,
            teamAPlayers,
            teamB,
            teamBPlayers
        };
    };

    const matchDetails = getMatchTeams();
    console.log(matchDetails.teamA.ID)
    console.log(matchDetails.teamB.ID)
    // console.log(matchDetails.teamB.Name)


    return (
        <div className='fields-container'>
            <div className="fields">
                <FieldA key={matchDetails.teamA.ID} team={matchDetails.teamA} players={matchDetails.teamAPlayers} />
                <FieldB key={matchDetails.teamB.ID} team={matchDetails.teamB} players={matchDetails.teamBPlayers} />

            </div>

        </div>

    );
};