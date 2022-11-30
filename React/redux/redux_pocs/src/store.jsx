// npm i redux react-redux
import {createStore} from "redux"
// import ballReducer from "./redux/ballReducer"
import batReducer from "./redux/batReducer";
// calling ballReucer and storing redcuer return value into store ( intitaly its 10)
const store  = createStore(batReducer);
export default store;

//stor is global for all componenet