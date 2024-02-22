import React from "react";
import s from './SliderCard.module.css';
import plant from './plant.png';
import Button from "./Button/Button";
const SliderCard = (props) => {
    return (

        <div className={s.container}>
            <img src={plant} className={s.img}></img>
            <div className={s.cardInfo}>
                <h3 className={s.title}>Fig. 1 (plant)</h3>
                <div className={s.desc}>Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.</div>
                <Button></Button>
            </div>
        </div>
    );
}

export default SliderCard;