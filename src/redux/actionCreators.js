import {ADD_USERS_LIST, ADD_CURRENT_USER} from "./actionTypes";

export const addUserlistAC = userList => ({
    type: ADD_USERS_LIST,
    payload: userList
})

export const addCurrentUserAC = user => ({
    type: ADD_CURRENT_USER,
    payload: user
})