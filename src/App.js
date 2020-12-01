import React, {useEffect, useRef} from 'react';
import Routing from './Routing';
import NavBar from './components/NavBar/NavBar';
import {useDispatch, useSelector} from 'react-redux';
import {addCurrentUserAC, addUserlistAC} from './redux/actionCreators';
import {io} from 'socket.io-client';

function App() {
    const dispatch = useDispatch();
    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:4000');
        const currentUser = localStorage.getItem('firebase-user');
        socket.current.on('userConnected', (user) => {
                dispatch(addUserlistAC(user))
        });
        if (currentUser) {
            dispatch(addCurrentUserAC(JSON.parse(currentUser)))
            socket.current.emit('initUser', JSON.parse(currentUser));
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
