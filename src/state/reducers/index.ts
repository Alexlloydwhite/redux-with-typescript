import { combineReducers } from "redux";
import bankReducer from  '../reducers/bankReducer';

const reducers = combineReducers({
    bank: bankReducer
});

export default reducers;