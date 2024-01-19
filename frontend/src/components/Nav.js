//Between page navigation

import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="App-nav">
            <Link to ="/">Home</Link>
            <Link to ="../topics">Web Concepts</Link>
            <Link to ="../gallery">Artwork</Link>
            <Link to ="../boardgames">Board Games</Link>
            <Link to ="../order">Order</Link>
            <Link to ="../staff">Staff</Link>
        </nav>
    );
}

export default Nav;