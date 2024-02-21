import React from "react";
import s from './Logo.module.css';
import logo from './logo.svg';
const Logo = () => {
    return (
        <img src={logo} className={s.logo}></img>
    );
}

export default Logo;