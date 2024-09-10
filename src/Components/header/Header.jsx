import '../../styling/header.css'
import { Link } from 'react-router-dom'
import SearchFilter from '../search-filter/SearchFilter';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <SearchFilter />
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/matches">Group Brackets</Link></li>
                    <li><Link to="/finals">Finals</Link></li>
                </ul>
            </nav>
        </header>
    );

}
