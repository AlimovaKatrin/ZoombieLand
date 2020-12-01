import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux';
import App from './App';

const firebaseConfig = {
    apiKey: 'AIzaSyA5Ut1GE6oPejGzwIQcQgvJyXq_nBMgtyg',
    authDomain: 'zombieland-alimova-katrin.firebaseapp.com',
    databaseURL: 'https://zombieland-alimova-katrin.firebaseio.com',
    projectId: 'zombieland-alimova-katrin',
    storageBucket: 'zombieland-alimova-katrin.appspot.com',
    messagingSenderId: '1093550106042',
    appId: '1:1093550106042:web:b84aae3a6deece35506983'
};


firebase.initializeApp(firebaseConfig);

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>,
    document.getElementById('root')
);

