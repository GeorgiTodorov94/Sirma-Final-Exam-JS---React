export default function FieldB({
    team,
    players
}) {
    return (
        <>
            <div className='team-b-name' style={{ left: '64.5%', position: 'absolute' }}>
                <span className="teamName" style={{ color: 'red', padding: '5px' }}>{team.Name}</span>
                {players.length > 0 && (
                    players.slice(0, 11).map(p => <div className="roster-container" key={p.ID} >
                        <div className="player-info" style={{ color: "black" }}>{Object.values(p).slice(2, 4).join('    ')}</div>
                    </div>)
                )}
            </div>
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

                {/* <div className="player team-a" style={{ top: '3%', left: '46%' }}>GK</div>
                <div className="player team-a" style={{ top: '30%', left: '10%' }}>DF</div>
                <div className="player team-a" style={{ top: '30%', left: '35%' }}>DF</div>
                <div className="player team-a" style={{ top: '30%', left: '60%' }}>DF</div>
                <div className="player team-a" style={{ top: '30%', left: '85%' }}>DF</div>
                <div className="player team-a" style={{ top: '45%', left: '20%' }}>MD</div>
                <div className="player team-a" style={{ top: '45%', left: '46.7%' }}>MD</div>
                <div className="player team-a" style={{ top: '45%', left: '78%' }}>MD</div>
                <div className="player team-a" style={{ top: '62%', left: '20%' }}>FW</div>
                <div className="player team-a" style={{ top: '62%', left: '48%' }}>FW</div>
                <div className="player team-a" style={{ top: '62%', left: '78%' }}>FW</div> */}

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
        </>
    );
}