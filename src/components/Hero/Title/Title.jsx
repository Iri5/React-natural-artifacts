import React from "react";
import s from './Title.module.css';
const Title = (props) => {
    return (
        <h1 className={s.text}>{props.text}</h1>
    );
}

export default Title;