import React from "react";
import {useSelector} from "react-redux";

import {Link} from 'react-router-dom';
import style from './NavBar.module.scss';
import AuthLink from './AuthButton';
import NavBarCard from '../Cards/NavBarUserCard/NavBarCard';

export default function () {
    const user = useSelector(state => state.currentUser)
    return (
        <>
            <div className={style.navBarContainer}>
                <div className={style.logoContainer}>
                    <img src="/zombie/icons8-brain-96.png"/>
                    <div className={style.logoName}>
                        Zombie_Land
                    </div>
                </div>
                <div className={style.linkList}>
                    <Link className={style.link} to="/main">Main</Link>
                    <AuthLink user={user}/>
                    <Link className={style.link} to="/info">Info</Link>
                </div>
                {user ? <NavBarCard user={user}/> : null}

            </div>
        </>
    )
};