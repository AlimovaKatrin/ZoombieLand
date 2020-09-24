import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';

import Info from './components/Info/Info';
import Main from './components/Main/Main'
import Login from './components/Login/Login';

export default function () {
    return (
        <div>
            <Switch>
                <Route path="/info">
                    <Info/>
                </Route>
                <Route path="/main">
                    <Main/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route>
                    <Redirect to="/main" />
                </Route>
            </Switch>
        </div>
    )
};