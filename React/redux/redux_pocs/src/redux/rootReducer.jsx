import { combineReducers } from "redux";
import batReducer from "./batReducer";
import ballReducer from "./ballReducer"
import asyncUserReducer from "./asyncUserReducer";
// combining state values of multiple component for pass to store
const rootReducer =combineReducers({
    Ball : ballReducer,
    Bat : batReducer,
    User : asyncUserReducer
})
export default rootReducer