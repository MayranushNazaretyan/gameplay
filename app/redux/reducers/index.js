import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import actionReducer from './actionReducer';
 
const reducers = combineReducers({
    loginReducer,
    actionReducer
});
 
export default reducers;