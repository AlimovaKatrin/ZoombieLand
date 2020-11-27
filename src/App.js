import React, {useEffect} from 'react';
import Routing from './Routing';
import NavBar from './components/NavBar/NavBar';
import firebase from 'firebase/app';
import {useDispatch} from 'react-redux';
import {addCurrentUserAC} from './redux/actionCreators';

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(firebase.auth())
        const currentUser = localStorage.getItem('firebase-user');
        if(currentUser){
            dispatch(addCurrentUserAC(currentUser))
        }
    },[dispatch]);

    return (
        <div>
            <NavBar/>
            <Routing/>
        </div>
    );
}

export default App;
