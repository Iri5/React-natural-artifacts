import React from "react";
import s from './Description.module.css';
const Description = (props) => {
    return (
        <div className={s.description}>{props.text}</div>
    );
}

export default Description;