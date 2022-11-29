// npm i redux react-redux
import {createStore} from "redux"
import ballReducer from "./redux/ballReducer"
// calling ballReucer and storing redcuer return value into store ( intitaly its 10)
const store  = createStore(ballReducer);
export default store;