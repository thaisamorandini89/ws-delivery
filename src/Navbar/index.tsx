import React from 'react';
import './style.css';

import { ReactComponent as Logo } from './logo.svg';

function Navbar(){
    return (
        <nav className="main-nav">
            <Logo />
            <h1 className="logo-text">DS Delivery</h1>
        </nav>
    )
}

export default Navbar;