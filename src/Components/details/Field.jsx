import { useParams } from 'react-router';
import { useCSVData } from "../../utilities/parseScv";
import { useEffect, useState } from 'react';

import '../../styling/field.css';
import { useData } from '../../utilities/dataContext';

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
    // console.log(matchDetails.teamA.Name)
    // console.log(matchDetails.teamB.Name)
    const goalKeeperA = matchDetails.teamAPlayers.find(m => m.Position == "GK")
    const goalKeeperB = matchDetails.teamBPlayers.find(m => m.Position == "GK")
    const DF = matchDetails.teamAPlayers.find(m => m.Position == "DF")
    const D2 = matchDetails.teamAPlayers.find(m => m.Position == "DF" && m.ID !== DF.ID)
    const D3 = matchDetails.teamAPlayers.find(m => m.Position == "DF" && m.ID !== D2.ID && m.ID !== DF.ID)
    const D4 = matchDetails.teamAPlayers.find(m => m.Position == "DF" && m.ID !== D2.ID && m.ID !== DF.ID && m.ID !== D3.ID)
    console.log(D4)

    return (
        <div className='fields-container'>
            <div className='team-a-name'>{matchDetails.teamA.Name}</div>
            <div className="fields">
                <div className="soccer-fieldA">
                    <div className="halfway-line"></div>
                    <div className="center-circle"></div>
                    <div className="penalty-area top"></div>
                    <div className="penalty-area bottom"></div>
                    <div className="goal-area top"></div>
                    <div className="goal-area bottom"></div>
                    <div className="penalty-spot top"></div>
                    <div className="penalty-spot bottom"></div>
                    <div className="goal top"></div>
                    <div className="goal bottom"></div>
                    <div className="corner-arc top-left"></div>
                    <div className="corner-arc top-right"></div>
                    <div className="corner-arc bottom-left"></div>
                    <div className="corner-arc bottom-right"></div>

                    <div className="player team-a" style={{ top: '3%', left: '46.5%' }}>{goalKeeperA.FullName}</div>
                    <div className="player team-a" style={{ top: '30%', left: '10%' }}>{DF.FullName}</div>
                    <div className="player team-a" style={{ top: '30%', left: '35%' }}>{D2.FullName}</div>
                    <div className="player team-a" style={{ top: '30%', left: '60%' }}>{D3.FullName}</div>
                    <div className="player team-a" style={{ top: '30%', left: '85%' }}>{D4.FullName}</div>
                    <div className="player team-a" style={{ top: '45%', left: '20%' }}>MD</div>
                    <div className="player team-a" style={{ top: '45%', left: '46.7%' }}>MD</div>
                    <div className="player team-a" style={{ top: '45%', left: '78%' }}>MD</div>
                    <div className="player team-a" style={{ top: '62%', left: '20%' }}>FW</div>
                    <div className="player team-a" style={{ top: '62%', left: '48%' }}>FW</div>
                    <div className="player team-a" style={{ top: '62%', left: '78%' }}>FW</div>

                    <div className="player team-b" style={{ top: '93%', left: '47.5%' }}>GK</div>
                    <div className="player team-b" style={{ top: '70%', left: '10%' }}>DF</div>
                    <div className="player team-b" style={{ top: '70%', left: '35%' }}>DF</div>
                    <div className="player team-b" style={{ top: '70%', left: '60%' }}>DF</div>
                    <div className="player team-b" style={{ top: '70%', left: '85%' }}>DF</div>
                    <div className="player team-b" style={{ top: '55%', left: '30%' }}>MD</div>
                    <div className="player team-b" style={{ top: '55%', left: '47%' }}>MD</div>
                    <div className="player team-b" style={{ top: '55%', left: '63%' }}>MD</div>
                    <div className="player team-b" style={{ top: '38%', left: '27%' }}>FW</div>
                    <div className="player team-b" style={{ top: '38%', left: '47%' }}>FW</div>
                    <div className="player team-b" style={{ top: '38%', left: '66%' }}>FW</div>
                </div>
                <div className='team-b-name'>{matchDetails.teamB.Name}</div>
                <div className="soccer-fieldB">
                    <div className="halfway-line"></div>
                    <div className="center-circle"></div>
                    <div className="penalty-area top"></div>
                    <div className="penalty-area bottom"></div>
                    <div className="goal-area top"></div>
                    <div className="goal-area bottom"></div>
                    <div className="penalty-spot top"></div>
                    <div className="penalty-spot bottom"></div>
                    <div className="goal top"></div>
                    <div className="goal bottom"></div>
                    <div className="corner-arc top-left"></div>
                    <div className="corner-arc top-right"></div>
                    <div className="corner-arc bottom-left"></div>
                    <div className="corner-arc bottom-right"></div>

                    <div className="player team-a" style={{ top: '3%', left: '46%' }}>{goalKeeperB.FullName}</div>
                    <div className="player team-a" style={{ top: '30%', left: '10%' }}>DF</div>
                    <div className="player team-a" style={{ top: '30%', left: '35%' }}>DF</div>
                    <div className="player team-a" style={{ top: '30%', left: '60%' }}>DF</div>
                    <div className="player team-a" style={{ top: '30%', left: '85%' }}>DF</div>
                    <div className="player team-a" style={{ top: '45%', left: '20%' }}>MD</div>
                    <div className="player team-a" style={{ top: '45%', left: '46.7%' }}>MD</div>
                    <div className="player team-a" style={{ top: '45%', left: '78%' }}>MD</div>
                    <div className="player team-a" style={{ top: '62%', left: '20%' }}>FW</div>
                    <div className="player team-a" style={{ top: '62%', left: '48%' }}>FW</div>
                    <div className="player team-a" style={{ top: '62%', left: '78%' }}>FW</div>

                    <div className="player team-b" style={{ top: '93%', left: '47.5%' }}>GK</div>
                    <div className="player team-b" style={{ top: '70%', left: '10%' }}>DF</div>
                    <div className="player team-b" style={{ top: '70%', left: '35%' }}>DF</div>
                    <div className="player team-b" style={{ top: '70%', left: '60%' }}>DF</div>
                    <div className="player team-b" style={{ top: '70%', left: '85%' }}>DF</div>
                    <div className="player team-b" style={{ top: '55%', left: '30%' }}>MD</div>
                    <div className="player team-b" style={{ top: '55%', left: '47%' }}>MD</div>
                    <div className="player team-b" style={{ top: '55%', left: '63%' }}>MD</div>
                    <div className="player team-b" style={{ top: '38%', left: '27%' }}>FW</div>
                    <div className="player team-b" style={{ top: '38%', left: '47%' }}>FW</div>
                    <div className="player team-b" style={{ top: '38%', left: '66%' }}>FW</div>

                </div>
            </div>

        </div>

    );
};