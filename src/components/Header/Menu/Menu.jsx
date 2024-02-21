import React from "react";
import s from './Menu.module.css';
import MenuItem from "./MenuItem/MenuItem";
const Menu = () => {
    return (

        <nav className={s.nav}>
            <MenuItem url='/catalog' text='Каталог'></MenuItem>
            <MenuItem url='/galary' text='Галерея'></MenuItem>
            <MenuItem url='/laboratary' text='О лаборатории'></MenuItem>
            <MenuItem url='/contacts' text='Контакты'></MenuItem>
        </nav>

    );
}

export default Menu;