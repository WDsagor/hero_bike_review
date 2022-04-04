import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "nav-link")} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "nav-link")} to='/review'>Review</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "nav-link")} to='/dashboard'>Dashboard</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "nav-link")}  to='/blogs'>Blogs</NavLink>
        </nav>
    );
};

export default Navbar;