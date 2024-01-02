import React from 'react';
import Header from '../Header/Header';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <p>&copy; 2023 Transaction tracker</p>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Terms of Service</li>
            </ul>
        </div>
    );
}


export default Footer;
