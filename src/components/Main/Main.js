import React from "react";
import {useSelector} from "react-redux";
import style from './Main.module.scss';
import InfoMSG from './ifoMSG/InfoMessage';
import TechCard from "../Cards/TechCard/TechCard";
import UserCard from '../Cards/UserCard/UserCard';

export default function () {
    const [user,listOfUsers ]= useSelector(state => [state.currentUser,state.usersList]);

    //#1 list.map(user => <UserCard person={user}/>)
    return (
        <>
            <div className={style.mainContainer}>
                {user ? listOfUsers.map(el=><UserCard key={el} person={el} online={true}/>) : <InfoMSG/>}
                {user ? null : <TechCard style={style} points={[
                    'This page use redux',
                    'We get list of users that are online from web socket',
                    'List of online users took from store',
                    'if u see this messages you are not authenticated'
                ]}/>}
            </div>
        </>
    )
}
