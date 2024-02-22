import React from "react";
import s from './SliderScreen.module.css';
import SliderCard from "./SliderCard/SliderCard";
const SliderScreen = (props) => {
    return (
        <div className={s.container}>
            <div className={s.paddingContainer}>
        <SliderCard></SliderCard>
            </div>
        </div>
    );
}

export default SliderScreen;