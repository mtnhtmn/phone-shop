import {combineReducers} from "redux";
import authReducer from "./authReducer";
import phonesReducer from "./phonesReducer";
import uiReducer from './uiReducer'
import ordersReducer from "./ordersReducer";

const reducers = combineReducers({
    authReducer,
    phonesReducer,
    uiReducer,
    ordersReducer
})

export default reducers

