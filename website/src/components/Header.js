// Header.js
import React from 'react';
import './Header.css'; // Make sure to include the CSS file for styling

const Header = () => (
    <header className="header">
        <a href="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
            Congressional Tracker
        </a>
        <nav>
            <ul className="nav-menu">
                <li><button className="menu-button">All Bills</button></li>
                <li><button className="menu-button">About Us</button></li>
                <li><button className="menu-button">Sign Up</button></li>
            </ul>
        </nav>
    </header>
);

export default Header;
