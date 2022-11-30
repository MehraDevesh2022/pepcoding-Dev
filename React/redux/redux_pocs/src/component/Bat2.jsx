import React, {useReducer} from 'react'
let initialState ={
     bat : 10,
     value :""
}

function reducer(state , action){
    switch(action.type){
        case "buy_bat" :
        // here we are making a new obj so pehle nya refrence bangea   
        return {
          bat: state.bat + Number(state.value),
          value : ""
        }
        break;
        case "sell_bat" : 
        if (state.bat - Number(state.value) <0){
          return {
            bat: "Oops snap ! No More Bat Found",
            value: "",
          }
        } else
         {
           return {
             bat: state.bat - Number(state.value),
             value: "",
           }
         }
        break;
        case "set_value":
            return {
                bat : state.bat,
                value : action.payload
            }
    }
}


function Bat2() {
  const [state , dispatch] = useReducer(reducer , initialState);
    return (
    <>
    <h1 style={{color : "red" , background : "black" , width : "20%" , border : "2px solid aqua"}}>with useReducer</h1>
    <h2>Total Bats are {state.bat}</h2>
    <input type="text" placeholder='Enter value' value={state.value} onChange ={(e)=>{
        let value = e.target.value;
        dispatch({
            type : "set_value",
            payload : value
        })
    }}></input>
    <h3>For Buying a Ball click <span><button onClick={()=> dispatch({type : "buy_bat"})}>Buy</button></span></h3>
    <h3>For selling a Ball and click <span><button onClick={()=> dispatch({type : "sell_bat"})}>sell</button></span></h3>

    </>
  )
}

export default Bat2