import React from "react";
import style from './Info.module.scss';

export default function ({creator}) {
    return (
        <div className={style.card}>
            <div>
                Name: <br/>
                {creator.name}
            </div>
            <br/>
            <div>
                Contact: {creator.phone}
            </div>
            <div>
                Status: {creator.status}
            </div>

        </div>
    )
}