import '../../styling/header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div class="container">
            <h1>EURO Football Championship</h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/matches">Matches</Link></li>
                    <li><Link to="/brackets">Brackets</Link></li>
                </ul>
            </nav>
        </div>

    )
    
}
