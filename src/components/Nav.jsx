import React from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3>@</h3>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </nav>
    )
}

export default Nav
