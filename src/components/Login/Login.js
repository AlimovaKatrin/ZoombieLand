import React, {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {addCurrentUserAC} from '../../redux/actionCreators';
import {useHistory} from 'react-router-dom';
import style from './Login.module.scss';
import TechCard from '../Cards/TechCard/TechCard';
import firebase from 'firebase/app';
import {useSocket} from '../useSocket/useSocket';

export default function () {
    const name = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const {initUser}= useSocket();

    const login = () => {
        // const loginName = '123456@mail.ru'
        // const loginPassword = '123456'
        const loginName = name.current.value;
        const loginPassword = password.current.value;
        firebase.auth()
            .signInWithEmailAndPassword(loginName, loginPassword)
            .then(() => {
                const user = firebase.auth().currentUser
                if (user != null) {
                    localStorage.setItem('firebase-user', JSON.stringify(user.providerData[0]))
                    dispatch(addCurrentUserAC(user.providerData[0]))
                    initUser(user.providerData[0])
                    history.push('/')
                }
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <div className={style.container}>
            <div className={style.loginForm}>
                <div>
                    <input placeholder="nikName" ref={name}/>
                    <input type="password" placeholder="password" ref={password}/>
                </div>
                <button onClick={login}>Log In Firebase</button>
            </div>

            <TechCard points={[
                'Login page use redux and react-router-dom',
                'useHistory to switch routing',
                'useDispatch to set current user in redux store']} style={style}/>
        </div>
    )
}
