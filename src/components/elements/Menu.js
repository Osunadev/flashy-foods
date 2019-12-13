import React from 'react';
import { Link } from "react-router-dom";
import '../scss/menu.scss';

function Menu() {
    return(
        <div className="container-menu">
            <Link className="home" to="/"></Link>
            <Link className="logIn" to="/LogIn"></Link>
            <Link className="signUp" to="/SignUp"></Link>
        </div>
    );
}

export default Menu;