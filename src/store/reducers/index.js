import { combineReducers } from "redux";
import btc from './btc';
import eth from './eth';
import user from './user';

export default combineReducers({
    btc,
    eth,
    user
})