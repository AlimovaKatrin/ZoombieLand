import {ADD_USERS_LIST} from '../actionTypes';

export default function (state = [], action) {
    switch (action.type) {
        case
        ADD_USERS_LIST: {
            return [... action.payload]
        }
        default:
            return state
    }
};
