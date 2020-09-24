import React from 'react';
import style from './NavBarCard.module.scss';

export default function ({user}) {
    console.log(user)
    return (
        <div className={style.container}>
            <span>
            <strong> nikName: </strong>
            {user}<br/>
            </span><br/>
            <span>
            <strong> Hobby: </strong> {user}
            </span>
        </div>
    )
}