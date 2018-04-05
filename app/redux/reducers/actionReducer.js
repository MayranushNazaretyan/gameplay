import ActionTypes from "../actionTypes";
import {handleActions} from "redux-actions";

export const defaultState = {
    actions: [
        {
            icon: "home",
            title: "Home"
        },
        {
            icon: "home",
            title: "Work"
        },
        {
            icon: "home",
            title: "ASMT"
        },
        {
            icon: "home",
            title: "Soft"
        },
        {
            icon: "home",
            title: "Hard"
        },
        {
            icon: "home",
            title: "Docs"
        }
    ]
};

const actionReducer = handleActions({   
   
}, defaultState);

export default actionReducer;
