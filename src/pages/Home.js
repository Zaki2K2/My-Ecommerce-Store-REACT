// Home.js

import React from 'react';
import Products from '../components/Products';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header>
                <h1 className="heading">Welcome to the SaVagE StOreS</h1>
            </header>
            <main>
                <section className="products-section">
                    <h2>Explore Our Products</h2>
                    <Products />
                </section>
            </main>
        </div>
    );
};

export default Home;
