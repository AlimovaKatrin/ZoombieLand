import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './components/Main/Main'
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

export default function () {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/reg">
                    <SignUp/>
                </Route>
            </Switch>
        </div>
    )
};
