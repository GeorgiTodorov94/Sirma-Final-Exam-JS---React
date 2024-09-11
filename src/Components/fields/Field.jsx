import { useParams } from 'react-router';
import { useCSVData } from "../../utilities/parseScv";
import { useEffect, useState } from 'react';

import '../../styling/field.css';
import { useData } from '../../utilities/dataContext';
import FieldA from './FieldA';
import FieldB from './FieldB';
import MatchFieldCard from '../match-card/MatchFieldCard';

export default function Field({
    match,
    groupedPlayersByTeamID,
}) {


    const [currentData, setCurrentData] = useState({})
    const matchID = Object.values(useParams())[0];
    const { teams, players, matches } = useData();
    // console.log(teams.data)
    // console.log(groupedPlayersByTeamID)
    // console.log(players.data)
    // console.log(matches.data)

    useEffect(() => {
        setCurrentData(prev => ({
            ...prev,
            teams: teams.data,
            currentMatch: match,
            clubPlayers: groupedPlayersByTeamID
            // Need to implement better logic in getting clubPlayers.
        }));
    }, [match, teams.data, matches.data, players.data, matchID]);
    // console.log(currentData.clubPlayers)
    // I need to clean most of the components if i have time 
    // I will start from here. This Logic here is taking all the info 
    // dynamically about the current match and converts it into one object with
    // key value pairs = {
    // match: {match}
    // players: {players}
    // team: {team}
    //    }
    // I can create a custom hook and implement it everywhere
    // where any match information is needed for manipulation
    // clean code and much cleaner components


    if (!currentData.teams?.length || !currentData.currentMatch || !currentData.clubPlayers) {
        return <div>Loading...</div>;
    }


    const getMatchTeams = () => {

        const teamA = currentData?.teams.find(t => t.ID === currentData?.currentMatch.ATeamID);
        // console.log(teamA)
        const teamB = currentData?.teams.find(t => t.ID === currentData?.currentMatch.BTeamID);
        // console.log(teamB)


        const teamAPlayers = currentData?.clubPlayers[teamA?.ID - 1] || 'Undefined';
        // console.log(teamAPlayers)
        const teamBPlayers = currentData?.clubPlayers[teamB?.ID - 1] || 'Undefined';
        // console.log(teamBPlayers)

        return {
            teamA,
            teamAPlayers,
            teamB,
            teamBPlayers
        };
    };

    const matchDetails = getMatchTeams();
    // console.log(matchDetails.teamA.ID)
    // console.log(matchDetails.teamB.ID)
    // console.log(matchDetails.teamAPlayers)
    // console.log(matchDetails.teamBPlayers)
    // console.log(matchDetails.teamBPlayers)
    // console.log(matchDetails.teamB.Name)

    return (
        <div className='fields-container'>
            <div className="fields">
                <FieldA key={matchDetails.teamA.ID} team={matchDetails.teamA} players={matchDetails.teamAPlayers} match={match} />
                <MatchFieldCard key={matchDetails.teamA.ID} team={matchDetails} aTeamPlayers={matchDetails.teamAPlayers} bTeamPlayers={matchDetails.teamBPlayers} match={match} />
                <FieldB key={matchDetails.teamB.ID} team={matchDetails.teamB} players={matchDetails.teamBPlayers} match={match} />
            </div>

        </div>

    );
};
