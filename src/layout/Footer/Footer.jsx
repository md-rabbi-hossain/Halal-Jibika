import React from 'react';
import Header from '../Header/Header';
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
function Footer() {
    return (
        <div className="footer">
            <p>&copy; 2024 Halal jibika</p>
            <ul>
                <li><FaFacebookSquare /></li>
                <li><FaDribbble /></li>
            </ul>
        </div>
    );
}


export default Footer;
