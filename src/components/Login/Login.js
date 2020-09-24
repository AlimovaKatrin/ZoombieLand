import React, {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {addCurrentUserAC} from "../../redux/actionCreators";
import {useHistory} from 'react-router-dom';
import style from './Login.module.scss';
import TechCard from "../Cards/TechCard/TechCard";


export default function () {
    const name = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const Login = () => {
        const loginName = name.current.value;
        const loginPassword = password.current.value;
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({
                loginName,
                loginPassword
            })
        })
            .then(res => res.json())
            .then(user => {
                dispatch(addCurrentUserAC(user))
                history.push('/main')
            })
            .catch(err => {
                console.log('uuups')
                history.push('/register')
            })
    };

    return (
        <div className={style.container}>
            <div className={style.loginForm}>
                <div>
                    <input placeholder="nikName" ref={name}/>
                    <input type="password" placeholder="password" ref={password}/>
                </div>
                <button onClick={Login}>Log In</button>
            </div>

            <TechCard points={[
                'Login page use redux and react-router-dom',
                'useHistory to switch routing',
                'useDispatch to set current user in redux store']} style={style}/>
        </div>
    )
}