import { combineReducers } from "redux";
import btc from './btc';
import eth from './eth';

export default combineReducers({
    btc,
    eth
})