import React from "react";
import style from '../Main.module.scss';

export default function () {
    return (
        <marquee scrollamount="5" loop="10" className={style.welcomeMsg}>
            Welcome! ...
            U Need To Login or Register in our App to see more features
        </marquee>
    )
}