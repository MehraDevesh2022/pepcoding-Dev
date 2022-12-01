import React from 'react'
import { connect } from 'react-redux'

function BatRedux(props) {
    console.log(props);
  return (
   <>
   
    <h1>Bat and sell Bat with redux batReducer</h1>
      <h2> Total bats are {props.bat}</h2>
      <input type="text" placeholder='enter value here' value={props.value} onChange ={(e)=>{
          let value = e.target.value
          props.settValue(value)
      }}></input>
      <button onClick={props.buyBat}>Buy</button>
      <button onClick={props.sellBat}>sell</button>
   </>
  )
}

function mapStateToProps(store){
  return store.Bat; // this store object access by BatRedux props
}

function  mapDispatchToProps(dispatch){
   // this object access by props far call methods to reducer
    return {
      sellBat :() =>{
        dispatch({
          type: "sell_bat",
          payload : 2
        });
    },
        buyBat :() =>{
           dispatch({
             type: "buy_bat",
             payload: 2
           });
        },
        settValue : (value) =>{
            dispatch({
                type : "set_value",
                payload : value
            })
        }
      
    };
}

/*
firts way to write this higher order function =>

const connectedWithBat = connect(mapStateToProps, mapDispatchToProps)(BatRedux);
export default connectedWithBat;

*/

// secondWay :=>
const connectedWithPropsFns = connect(mapStateToProps, mapDispatchToProps);
const connectedWithBat = connectedWithPropsFns(BatRedux);

export default connectedWithBat;