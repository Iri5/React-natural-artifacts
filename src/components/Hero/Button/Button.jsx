import React from "react";
import s from './Button.module.css';
import arrow from './Arrow1.svg';
import { NavLink } from "react-router-dom";
const Button = (props) => {
    return (
        <div className={s.margin}>
            <NavLink className={s.container}>
                <div className={s.text}>Исследовать</div>
                <img src={arrow} className={s.img}></img>
            </NavLink>
        </div>
    );
}
export default Button;