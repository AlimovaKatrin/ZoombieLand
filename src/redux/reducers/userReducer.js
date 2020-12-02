import { ADD_CURRENT_USER} from '../actionTypes';

export default function (state=null, action) {
    switch (action.type) {
        case
        ADD_CURRENT_USER: {
            return action.payload
        }
        default:
            return state
    }
};
