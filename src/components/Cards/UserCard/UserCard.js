import React from 'react';
import style from './UserCard.module.css';

export default function ({person}) {
    return (
        <div className={style.cardContainer}>
            <strong> Name: </strong>
            {person.name}<br/>
            <strong> Hobby: </strong> {person.hobby}
        </div>
    )
}