import {combineReducers} from "redux";
import authReducer from "./authReducer";
import phonesReducer from "./phonesReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
    authReducer,
    phonesReducer,
    cartReducer,
})

export default reducers

