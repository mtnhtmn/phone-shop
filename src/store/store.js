import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers/reducers";
import {createLogger} from 'redux-logger'
import thunk from "redux-thunk";

const logger = createLogger ({
    collapsed:true
});
const store = createStore(rootReducer, compose(applyMiddleware(thunk,logger)))
export default store