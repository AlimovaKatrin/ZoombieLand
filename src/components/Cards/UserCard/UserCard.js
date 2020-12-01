import React from 'react';
import style from './UserCard.module.css';

export default function ({person,online}) {
    return (
        <div className={style.cardContainer}>
            {online ? <strong> Online: </strong> : <strong> Name: </strong>}
            {person}<br/>
            {/*<strong> Hobby: </strong> {person.hobby}*/}
        </div>
    )
}
