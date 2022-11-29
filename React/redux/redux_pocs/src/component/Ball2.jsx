import React,{useReducer} from 'react'
// this is function reducer take dispatch object value and state
// it provides all action in one function
function redcuer(state ,action){
    console.log("hello");
    switch (action.type) {
       
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        console.log("wrong type");
    }
}


function Ball2() {
  const [ball, dispatch] = useReducer(redcuer, 10); // useReducer takses reducer function and intial value

  return (
    <>
      <h1 > with reduer =></h1>
      <h1>we total have Balls : {ball}</h1>
      {/* passing the parameter as type object into dispatch and call reducer */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button> 
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

export default Ball2