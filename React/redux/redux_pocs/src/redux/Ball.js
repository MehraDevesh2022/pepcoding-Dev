import React,{useState} from 'react'
import {connect} from "react-redux"
function Ball(props) { // props is  store state retrun by mapStateToProps
  return (
    <>
      <h1>Balls</h1>
      <h2>Num of Balls :{props.balls}</h2>
      <button onClick ={props.buyBall}>+</button>
      <button onClick={props.sellBall}>-</button>
    </>
  )
}
// this function get state varibale from store 
function mapStateToProps(store){
  return store
}
function mapDidpatchToProps(dispatch){
    return{
        sellBall : ()=>{
            dispatch({
                type : "decrement"
            })
        },
        buyBall : () =>{
            dispatch({
                type : "increment"
            })
        }
    }
}

// connect connecting mapStateToProps to store passed by Provider in app.js
export default connect(mapStateToProps ,mapDidpatchToProps)(Ball)