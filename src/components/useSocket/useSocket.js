import {io} from 'socket.io-client';
import {useEffect, useRef} from 'react';
import {addUserlistAC} from '../../redux/actionCreators';
import {useDispatch, useSelector} from 'react-redux';


export const useSocket = () => {
    const socket = useRef();
    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem('firebase-user'));

    useEffect(() => {
        socket.current = io('ws://localhost:4000');

        socket.current.on('userConnected', (userList) => {
            dispatch(addUserlistAC(currentUser ? userList.filter(el => el !== currentUser.email) : userList))
        });
        return () => socket.current.disconnect()
    }, [])

    const initUser = (currentUser) => {
        socket.current.emit('initUser', currentUser);
    };

    const disconnectUser = (email) => {
        socket.current.emit('disconnectUser', email);
        socket.current.disconnect()
    }

    return {initUser, disconnectUser}
}
