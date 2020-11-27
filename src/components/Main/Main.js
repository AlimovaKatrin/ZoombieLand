import React from "react";
import {useSelector} from "react-redux";
import style from './Main.module.scss';
import InfoMSG from './ifoMSG/InfoMessage';
import TechCard from "../Cards/TechCard/TechCard";

export default function () {
    const user = useSelector(state => state.currentUser);

    //#1 list.map(user => <UserCard person={user}/>)
    return (
        <>
            <div className={style.mainContainer}>
                {user ? '#1 here wil bee list of users that in system' : <InfoMSG/>}
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
