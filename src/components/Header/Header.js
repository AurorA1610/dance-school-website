import React from 'react';
import  { NavLink }  from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header pt-3">
            <img src={logo} alt="" className="logo"/>
            <div className="navigation my-4 py-3">
                <NavLink to="/home"><button className="btn border-dark border-1 fw-bold btn-nav rounded-pill mx-5 my-2 px-3">Home</button></NavLink>
                <NavLink to="/services"><button className="btn border-dark border-1 fw-bold btn-nav rounded-pill mx-5 my-2 px-3">Our Services</button></NavLink>
                <NavLink to="/about"><button className="btn border-dark border-1 fw-bold btn-nav rounded-pill mx-5 my-2 px-3">About Us</button></NavLink>
                <NavLink to="/instructors"><button className="btn border-dark border-1 fw-bold btn-nav rounded-pill mx-5 my-2 px-3">Our Instructors</button></NavLink>
            </div>
        </div>
    );
};

export default Header;