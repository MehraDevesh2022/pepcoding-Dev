
//This example is Alternative for tackling diffrence btwn useState and useReducer
import React,{useState} from "react";
function Ball(){
  // this example is with useState simple : now Ball2 have useReducer with same work
  let [ball, setBall] = useState(10);

  function increment() {
    setBall(ball + 1);
  }
  function decrement() {
    setBall(ball - 1);
  }

  return (
    <>
        <h1>With useState</h1>
      <h2>We have Balls : {ball}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
export default Ball