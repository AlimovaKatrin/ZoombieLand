import React, {useState, useEffect} from "react";

import {addUserlistAC} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import style from './Main.module.scss';
import InfoMSG from './ifoMSG/InfoMessage';
import UserCard from '../Cards/UserCard/UserCard';
import TechCard from "../Cards/TechCard/TechCard";

export default function () {
    const user = useSelector(state => state.currentUser);
    const list = useSelector(state => state.usersList);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('/user')
            .then(res => res.json())
            .then(({users}) =>
                dispatch(addUserlistAC(users))
            )
    }, [dispatch]);

    return (
        <>
            <div className={style.mainContainer}>
                {user ? list.map(user => <UserCard person={user}/>) : <InfoMSG/>}
                {user ? null : <TechCard style={style} points={[
                    'This page use redux',
                    'After fetch we dispatch user list to redux store',
                    'List of registered users taken from redux store',
                    'Current user also comes from redux store',
                    'if u see this messages you are not registered'
                ]}/>}
            </div>
        </>
    )
}