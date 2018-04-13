import ActionTypes from "../actionTypes";
import {handleActions} from "redux-actions";

const defaultState = {
    actions: [
        {
            icon: "home",
            title: "Home"
        },
        {
            icon: "briefcase",
            title: "Work"
        },
        {
            icon: "star",
            title: "ASMT"
        },
        {
            icon: "comments",
            title: "Soft"
        },
        {
            icon: "desktop",
            title: "Hard"
        },
        {
            icon: "book",
            title: "Docs"
        }
    ],
    skills: [
        {
            value: 55,
            name: "Personal"
        },
        {
            value: 105,
            name: "Project Activities",
        },
        {
            value: 200,
            name: "Soft Skills",
        },
        {
            value: 250,
            name: "Hard Skills"
        }

    ]
};

const mainReducer = handleActions({

}, defaultState);

export default mainReducer;
