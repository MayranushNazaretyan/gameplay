import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import mainReducer from './mainReducer';
 
const reducers = combineReducers({
    loginReducer,
    mainReducer
});
 
export default reducers;