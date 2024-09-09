import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCSVData } from './parseScv';

const DataContext = createContext();

export default function FetchAndProvideData({ children }) {

    const players = useCSVData('players.csv');
    const matches = useCSVData('matches.csv');
    const teams = useCSVData('teams.csv');

    const [data, setData] = useState({
        players: [],
        matches: [],
        teams: [],
    });

    useEffect(() => {
        setData({
            players,
            matches,
            teams
        })
    }, [players, matches, teams]);


    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};



export const useData = () => useContext(DataContext)