import React from 'react';
import style from './SignUp.module.scss'
import firebase from 'firebase';
import {useHistory} from 'react-router-dom';
import {addCurrentUserAC} from '../../redux/actionCreators';
import {useDispatch} from 'react-redux';
import {useSocket} from '../useSocket/useSocket';

const SignUp = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {initUser} = useSocket();

    const regHandler = (e) => {
        e.preventDefault();
        const {
            email: {value: email},
            name: {value: name},
            phone: {value: phone},
            password: {value: password},
            photoURL: {value: photoURL}
        } = e.target;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: name,
                    photoURL: photoURL,
                    phone: phone
                }).then(function () {
                    localStorage.setItem('firebase-user', JSON.stringify(user.providerData[0]))
                    dispatch(addCurrentUserAC(user.providerData[0]))
                    initUser(user.providerData[0])
                    history.push('/')
                    console.log(user)
                })
            })
            .catch((error) => {
                alert(error)

            });
    };
    return (
        <form onSubmit={regHandler} className={style.formContainer}>
            <input name='email' placeholder='email'/>
            <input name='photoURL' placeholder='photoURL'/>
            <input name='name' placeholder='name'/>
            <input name='phone' placeholder='phone'/>
            <input name='password' placeholder='password'/>
            <button type='submit'> Register</button>
        </form>
    );
};

export default SignUp;
