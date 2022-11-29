import React,{useReducer} from 'react'

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
 const[ball , dispatch] = useReducer(redcuer ,10);

  return (
    <>
      <div>Ball2 eg :</div>
      <h1>we total have Balls : {ball}</h1>
      <button onClick={()=>dispatch ({type : "increment"})}>+</button>
      <button onClick={()=>dispatch ({type : "decrement"})}>-</button>

    </>
  );
}

export default Ball2