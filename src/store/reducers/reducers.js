import {combineReducers} from "redux";
import authReducer from "./authReducer";
import phonesReducer from "./phonesReducer";
import cartReducer from "./cartReducer";
import uiReducer from './uiReducer'
import ordersReducer from "./ordersReducer";

const reducers = combineReducers({
    authReducer,
    phonesReducer,
    cartReducer,
    uiReducer,
    ordersReducer
})

export default reducers

