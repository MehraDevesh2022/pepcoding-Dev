// npm i redux react-redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
// import ballReducer from "./redux/ballReducer"
// import batReducer from "./redux/batReducer";
// calling ballReucer and storing redcuer return value into store ( intitaly its 10)
import rootReducer from "./redux/rootReducer";
const store  = createStore(rootReducer ,applyMiddleware(thunk)); // rootReducer combine all component at one object 

export default store;

//stor is global for all componenet