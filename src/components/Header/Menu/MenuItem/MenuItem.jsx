import React from "react";
import s from './MenuItem.module.css';
import { NavLink } from "react-router-dom";
const MenuItem = (props) => {
    return (
        <div> 
            <NavLink to={props.url} className={s.link}>{props.text}</NavLink>
        </div>
    );
}

export default MenuItem;