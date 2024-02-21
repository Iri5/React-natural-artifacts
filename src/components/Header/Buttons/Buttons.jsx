import React from "react";
import s from './Buttons.module.css';
import Button from "./Button/Button";
import search from "./search.svg";
import login from "./log-in.svg";

const Buttons = () => {
    return (
        <div className={s.container}>
            <Button url='/search' src={search}></Button>
            <Button url='/login' src={login}></Button>

        </div>
    );
}

export default Buttons;