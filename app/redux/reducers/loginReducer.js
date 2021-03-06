import ActionTypes from "../actionTypes";
import {handleActions} from "redux-actions";

export const defaultState = {
    name: ""
};

const loginReducer = handleActions({   
    [ActionTypes.login]: (state, {payload}) => ({
        ...state,
       name: payload
    })
}, defaultState);

export default loginReducer;
