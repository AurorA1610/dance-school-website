import React from 'react';
import  { NavLink }  from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1 className="heading fw-bold">Elegance Dance School</h1>
            <div className="navigation my-4 py-2">
                <NavLink to="/home"><button className="btn border-dark border-2 fw-bold btn-nav rounded mx-5 my-2 p-2">Home</button></NavLink>
                <NavLink to="/services"><button className="btn border-dark border-2 fw-bold btn-nav rounded mx-5 my-2 p-2">Our Services</button></NavLink>
                <NavLink to="/about"><button className="btn border-dark border-2 fw-bold btn-nav rounded mx-5 my-2 p-2">About Us</button></NavLink>
                <NavLink to="/instructors"><button className="btn border-dark border-2 fw-bold btn-nav rounded mx-5 my-2 p-2">Our Instructors</button></NavLink>
            </div>
        </div>
    );
};

export default Header;