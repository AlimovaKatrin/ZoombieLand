import {ADD_USERS_LIST, ADD_CURRENT_USER} from "./actionTypes";

const initialState = {
    currentUser: null,
    usersList: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case
        ADD_USERS_LIST: {
            return {...state, usersList: action.payload}
        }
        case
        ADD_CURRENT_USER: {
            return {...state, currentUser: action.payload}
        }
        default:
            return state
    }
};