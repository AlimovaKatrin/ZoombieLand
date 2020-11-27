import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './components/Main/Main'
import Login from './components/Login/Login';

export default function () {
    return (
        <div>
            <Switch>
                <Route path="/main">
                    <Main/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </div>
    )
};
