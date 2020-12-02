import React, {useEffect, useRef} from 'react';
import Routing from './Routing';
import NavBar from './components/NavBar/NavBar';
import {useDispatch, useSelector} from 'react-redux';
import {addCurrentUserAC, addUserlistAC} from './redux/actionCreators';
import {useSocket} from './components/useSocket/useSocket';

function App() {
    const dispatch = useDispatch();
    const {initUser} = useSocket();

    useEffect(() => {
        const currentUser = localStorage.getItem('firebase-user');

        if (currentUser) {
            dispatch(addCurrentUserAC(JSON.parse(currentUser)))
            initUser(JSON.parse(currentUser))
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
