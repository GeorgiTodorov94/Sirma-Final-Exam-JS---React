import '../../styling/header.css'

export default function Header() {
    return (
        <div class="container">
            <h1>EURO Football Championship</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="/matches">Matches</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}