import React from "react";
import s from './Button.module.css';
import { NavLink } from "react-router-dom";
const Button = (props) => {
    return (
        <div > 
            <NavLink to={props.url} className={s.link}>
            <img src={props.src} className={s.img}></img>
            </NavLink>
        </div>
    );
}

export default Button;