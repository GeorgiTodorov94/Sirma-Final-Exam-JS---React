import Header from "../header/Header";
import Footer from "../footer/Footer";
import '../../styling/homepage.css'
import '../../styling/footer.css'
export default function Homepage() {
    return (
        <>
            <Header />
            <main class="home">
                <section class="welcome">
                    <div class="container">
                        <h2>Welcome to the EURO Football Championship Visualizer</h2>
                        <p>
                            Stay updated with all the latest match results, statistics, and team standings.
                            Upload CSV files to visualize match results and dive deeper into the action.
                        </p>
                        <a href="#" class="cta-button">Get Started</a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}