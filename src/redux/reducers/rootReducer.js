import userReducer from './userReducer';
import listReducer from './listOfActiveReducer';
import {combineReducers} from 'redux';

export default combineReducers({currentUser: userReducer, usersList: listReducer});
