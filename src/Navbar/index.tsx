import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

function Navbar(){
    return (
        <nav className="main-nav">
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link>
        </nav>
    )
}

export default Navbar;