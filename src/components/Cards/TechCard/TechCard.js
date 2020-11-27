import React, {memo} from 'react';

function TechCard({style, points}) {
    return (
        <ul className={style.list}>
            <strong>What you need to know <br/> about this part:</strong>
            <br/>
            {points ? points.map((point, i) => <ol key={i}>
                {point}
                <img src="/zombie/icons8-zombie-hand-thumbs-up-64.png"/>
            </ol>) : null}
        </ul>
    )
};
export default memo(TechCard)
