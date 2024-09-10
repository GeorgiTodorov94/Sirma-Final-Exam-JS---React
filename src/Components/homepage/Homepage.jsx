import '../../styling/homepage.css';

import { Link } from "react-router-dom";

export default function Homepage() {

    return (
        <>
            <main class="home">
                <section class="welcome">
                    <div class="container">
                        <h2>Welcome to the EUROPEAN Football Championship Visualizer</h2>
                        <p>
                            Stay updated with all the latest match results, statistics, and team standings.
                        </p>
                        <Link to="/brackets" class="cta-button">Get Started</Link>
                    </div>
                </section>
            </main>
        </>
    );
}