import '../../styling/header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/matches">Matches</Link></li>
                    <li><Link to="/brackets">Brackets</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );

}
