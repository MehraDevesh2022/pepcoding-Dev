import { combineReducers } from "redux";
import batReducer from "./batReducer";
import ballReducer from "./ballReducer"

// combining state values of multiple component for pass to store
const rootReducer =combineReducers({
    Ball : ballReducer,
    Bat : batReducer
})
export default rootReducer