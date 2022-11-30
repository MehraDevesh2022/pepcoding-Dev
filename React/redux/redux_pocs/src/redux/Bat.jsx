import React from 'react'
import { connect } from 'react-redux'

function Bat(props) {
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
    return store // this store object access by props in Ball
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

const connectedWithPropsFns = connect(mapStateToProps, mapDispatchToProps);
const connectedWithBat = connectedWithPropsFns(Bat);

export default connectedWithBat;