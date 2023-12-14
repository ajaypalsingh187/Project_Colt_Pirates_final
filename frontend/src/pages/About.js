import React from 'react';
import './Pages.css';

export default function About() {

    return (
        <div id="About">
            <h1>About Us</h1>

            <div className="About__box">
                <h2>History</h2>
                <p>
                    <span>COLT PIRATES</span> is a family-owned company specializing in the sale of luxury cars from premium brands, with a tradition that spans almost thirty years.
                </p>
                <p>
                    Born out of a passion for automotive, where experience and knowledge of cars have been passed down from generation to generation.
                </p>
            </div>

            <div className="About__box">
                <h2>Mission</h2>
                <p>
                    Our main goal is to provide an individual, honest, and sincere approach to each customer, ensuring they choose the best car for themselves consciously.
                </p>
                <p>
                    After a successful first transaction, the majority of our customers return to us for another purchase and recommend our services to others.
                </p>
            </div>

            <div className="About__box">
                <h2>Foundation of Operation</h2>
                <p>
                    All cars are our property. The decision to purchase is always preceded by a thorough inspection of the vehicle and meeting strict selection criteria.
                </p>
                <p>
                    <span>We only buy models with a fully documented history of use and maintenance, accident-free, and often with a factory warranty.</span>
                </p>
                <p>
                    <span>Exclusively national cars, purchased from Polish authorized dealership salons.</span>
                </p>
            </div>

            <div className="About__box">
                <h2>Car Change - Comprehensive Approach</h2>
                <p>
                    We take a comprehensive approach to the issue of a potential customer changing their car:
                </p>
                <ul>
                    <li>Provide advice on choosing a brand and model that meets your expectations.</li>
                    <li>Search for vehicles on your request according to specific requirements.</li>
                    <li>If you have a vehicle in very good condition, we can buy it or take it in exchange for a car from our offer.</li>
                    <li>Organize very favorable financing for both companies and private individuals.</li>
                </ul>
            </div>

            <h3>Feel free to contact us via the form, email, or phone!</h3>
        </div>
    )
}
