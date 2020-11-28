import React, {useEffect} from 'react';
import Routing from './Routing';
import NavBar from './components/NavBar/NavBar';
import firebase from 'firebase/app';
import {useDispatch} from 'react-redux';
import {addCurrentUserAC} from './redux/actionCreators';
import {io} from 'socket.io-client';

function App() {

    const dispatch = useDispatch();


    useEffect(() => {
        const socket = io('ws://localhost:4000');
        socket.on('hello', (arg) => {
            console.log(arg); // world
        });
        const currentUser = localStorage.getItem('firebase-user');
        if (currentUser) {
            dispatch(addCurrentUserAC(currentUser))
        }
    }, [dispatch]);

    return (
        <div>
            <NavBar/>
            <Routing/>
        </div>
    );
}

export default App;
