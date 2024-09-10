import '../../styling/homepage.css';

import { Link } from "react-router-dom";

export default function Homepage() {

    return (
        <>
            <main className="home">
                <section className="welcome">
                    <div className="container">
                        <h2>Welcome to the EUROPEAN Football Championship Visualizer</h2>
                        <p style={{ fontSize: '35px' }}>
                            Stay updated with all the latest match results, statistics, and team standings.
                        </p>
                        <Link style={{ position: 'fixed', right: '47%' }} to="/matches" className="cta-button">Get Started</Link>
                    </div>
                </section>
            </main>
        </>
    );
}