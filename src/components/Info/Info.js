import React, {useEffect, useState} from 'react';
import style from './Info.module.scss';
import Card from './AboutUsCard';
import TechCard from '../Cards/TechCard/TechCard';

export default function () {
    const [aboutUs, setAboutUs] = useState()
    useEffect(() => {
        fetch('/info')
            .then(res => res.json())
            .then(info => setAboutUs(info));
    }, [setAboutUs])
    return (
        <div className={style.container}>
            <TechCard style={style} points={[`Styles took from './Info.module.scss'.`,
                `block from the rigth side 'About us' renders using map construction`,
                `This page has UseEffect and UseState hooks.`,
                `UseEffect help us to get data from our backend, check package json and proxy.
    UseEffect activate function inside himself after all renders on the page`,
                `UseState - return variable and function to update variable`]}/>
            <div>
                About us:
                <br/>
                {aboutUs ? aboutUs.creators.map(creator => <Card creator={creator}/>) : null}
                <div>
                    We have over {aboutUs ? aboutUs.users : 'some'} users !
                    Join us ...
                </div>
            </div>

        </div>
    )
};