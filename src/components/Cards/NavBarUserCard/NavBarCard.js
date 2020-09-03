import React from 'react';
import style from './NavBarCard.module.scss';

export default function ({user}) {
    console.log(user)
    return (
        <div className={style.container}>
            <span>
            <strong> nikName: </strong>
            {user.nikName}<br/>
            </span><br/>
            <span>
            <strong> Hobby: </strong> {user.hobby}
            </span>
        </div>
    )
}