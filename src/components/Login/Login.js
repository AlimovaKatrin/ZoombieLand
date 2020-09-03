import React, {useReducer, useRef} from "react";
import {useDispatch} from "react-redux";
import {addCurrentUserAC} from "../../redux/actionCreators";
import {useHistory} from 'react-router-dom';

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
        <div>

            <input ref={name}/>
            <input ref={password}/>
            <button onClick={Login}>Log In</button>

        </div>
    )
}