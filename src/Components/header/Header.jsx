import '../../styling/header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/matches">Group Brackets</Link></li>
                    <li><Link to="/finals">Finals</Link></li>
                </ul>
            </nav>
        </header>
    );

}
