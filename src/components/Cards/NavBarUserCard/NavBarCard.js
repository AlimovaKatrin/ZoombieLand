import React from 'react';
import style from './NavBarCard.module.scss';

export default function ({user}) {

    return (
        <div className={style.container}>
            <span>
            <strong> nikName: </strong>
                {user.displayName}<br/>
            </span><br/>
            <span>
            <strong> Email: </strong> {user.email}
            </span>
        </div>
    )
}
