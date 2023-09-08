// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';
import logoStore from '../components/logoStore.png';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div className="navbar-container">
            <Link to="/" className="logo-link">
                <span className="logo">
                    <img src={logoStore} alt="SaVagE StOreS Logo" />
                </span>
            </Link>
            <div className="myNav">
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
