import '../../styling/footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div class="footer-container">
            <p>&copy; 2024 EURO Football Championship. All rights reserved.</p>
            <nav>
                <ul>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Terms of Service</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    )
}