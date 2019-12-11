import React from 'react';
import { NavLink } from 'react-router-dom';
import './scss/Menu.scss';

function Menu() {
    return (
    <div className="container-menu">
        <NavLink className="Home" to="/Home"></NavLink>
        <NavLink className="LogIn" to="/LogIn"></NavLink>
        <NavLink className="SignUp" to="/SignUp"></NavLink>
    </div>
    );
}

export default Menu;