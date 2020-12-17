import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">BookSearch</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Googlebooks</Link>
                    </li>
                    <li><a href="badges.html">Web</a></li>
                    <li><a href="collapsible.html">other.com</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;