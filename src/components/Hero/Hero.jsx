import React from "react";
import s from './Hero.module.css';
import Title from "./Title/Title";
import Description from "./Description/Description";
import Button from "./Button/Button";

const Hero = () => {
    return (
        <div className={s.container}>
            <div className={s.paddingContainer}>
                <div className={s.flexContainer}>
                    <Title text='Крупнейшая коллекция природных артефактов' className={s.title}></Title>
                    <Description className={s.description} text='Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.'></Description>
                    <Button ></Button>
                </div>
            </div>
        </div>
    );
}
export default Hero;