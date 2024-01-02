import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1><span style={{color: 'white'}}><i>Halal Jibika</i></span></h1>
            </div>
            <div className="nav-links">
                <NavLink to='/' style={{ textDecoration: 'none', color: 'inherit' }} className="nav-link" activeClassName="active">
                    <span style={{ color: 'white' }}>Home</span>
                </NavLink>
                <NavLink to='/about' style={{ textDecoration: 'none', color: 'inherit' }} className="nav-link" activeClassName="active">
                    <span style={{ color: 'white' }}> About</span>
                </NavLink>
                <NavLink to='/contact' style={{ textDecoration: 'none', color: 'inherit' }} className="nav-link" activeClassName="active">
                    <span style={{ color: 'white' }}> Contact</span>
                </NavLink>
                <NavLink to='/job' style={{ textDecoration: 'none', color: 'inherit' }} className="nav-link" activeClassName="active">
                    <span style={{ color: 'white' }}> Jobs</span>
                </NavLink>
                <NavLink to='/login' style={{ textDecoration: 'none', color: 'inherit' }} className="nav-link" activeClassName="active">
                    <span style={{ color: 'white' }}>Login</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Header;
