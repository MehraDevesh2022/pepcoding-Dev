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
function mapDispatchToProps(dispatch){
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

// to give access to the component to two things
//  first store  -> mapsstatetoprops
// second  dispatch -> mapDispatchtoprops


//first way write ==>
// export default connect(mapStateToProps ,mapDispatchToProps)(Ball)

// second way to write higher order function
const connectdWIthpropsFns = connect(mapStateToProps, mapDispatchToProps);
const connectedWithBall = connectdWIthpropsFns(Ball);
export default connectedWithBall;

// connect() method connecting to the store variable through the Provider at app.js
// coonect() have to methods :
  // 1 mapStateToProps => provides the state of variable from store ( and passed into the ball component as props)
  // 2 mapDispatchToProps => it has dispacth and dispacth and passed to the props as obj. and it will make sure whenevr changeOccures into the component value it connect to the reducer for action with the perticluer chnage and passed payload and type as action