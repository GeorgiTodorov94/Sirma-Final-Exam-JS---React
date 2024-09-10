import '../../styling/homepage.css';

import { Link } from "react-router-dom";
import { useState } from 'react';
import { useData } from '../../utilities/dataContext';

import SearchFilter from '../search-filter/SearchFilter';
export default function Homepage() {

    const [filteredMatches, setFilteredMatches] = useState([]);
    const { matches, teams } = useData();

    if (!matches.data && teams.data) {
        return <div>Loading...</div>
    }
    return (
        <>
            <main className="home">

                <section className="welcome">
                    <SearchFilter allMatches={matches.data} allTeams={teams.data} onFilter={setFilteredMatches} />
                    <div className="container">
                        <h2>Welcome to the EUROPEAN Football Championship Visualizer</h2>
                        <p style={{ fontSize: '35px' }}>
                            Stay updated with all the latest match results, statistics and team standings.
                        </p>
                        <Link style={{ position: 'fixed', right: '47%' }} to="/matches" className="cta-button">Get Started</Link>
                    </div>
                </section>
            </main>
        </>
    );
}