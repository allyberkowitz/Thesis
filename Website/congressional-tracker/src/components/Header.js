import React from 'react';
import './Header.css'; // Make sure to include the CSS file for styling

const Header = () => (
    <header className="header">
        <div className="logo">Congressional Tracker</div>
        <nav>
            <ul className="nav-menu">
                <li><button className="menu-button">Menu Item 1</button></li>
                <li><button className="menu-button">Menu Item 2</button></li>
                <li><button className="menu-button">Menu Item 3</button></li>
            </ul>
        </nav>
    </header>
);

export default Header;
