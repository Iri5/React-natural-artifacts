import React from "react";
import s from './Header.module.css';
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Buttons from "./Buttons/Buttons";
const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
            <Logo>logo</Logo>
            <Menu>menu</Menu>
            <div></div>
            <Buttons>buttons</Buttons>
            </div>
        </header>
    );
}

export default Header;