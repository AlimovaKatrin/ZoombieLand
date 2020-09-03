import React from 'react';

export default function ({style, points}) {
    return (
        <ul className={style.list}>
            <strong>What you need to know <br/> about this page:</strong>
            <br/>
            {points ? points.map(point => <ol>
                {point}
                <img src="/zombie/icons8-zombie-hand-thumbs-up-64.png"/>
            </ol>) : null}
        </ul>
    )
};
