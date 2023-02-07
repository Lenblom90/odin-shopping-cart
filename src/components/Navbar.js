import { Link } from "react-router-dom";
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <div className="header">
            <div className="header-text">
                <h1 className="title">Odin Shopping Cart</h1>
                <p className="description">This is an exercise to practice routing and state i guess</p>
            </div>
            <nav>
                <ul className="nav-links">
                    <li className="nav-item">
                        <Link to={`/home`}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/shop`}>Shop</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}