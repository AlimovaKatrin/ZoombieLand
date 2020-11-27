import React from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import style from './NavBar.module.scss';
import {addCurrentUserAC} from "../../redux/actionCreators";

export default function ({user}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const Logout = () => {
        fetch('/logout')
            .then(res => {
                dispatch(addCurrentUserAC(null))
                localStorage.removeItem('firebase-user');
                history.push('/login')
            })
            .catch(err => history.push('/main'))
    }
    return user ? <span className={style.link} onClick={Logout}>Logout</span> :
        <Link className={style.link} to="/login">Login</Link>
}
