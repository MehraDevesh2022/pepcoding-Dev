import React ,{useEffect} from 'react'
import {connect} from "react-redux"
import userFetchMiddleWare from '../../redux/asyncUserMiddleWare/userMiddleWare';
function UserAsync(props) {
   console.log(props);
 useEffect(function foo() {
   setTimeout(function fn(){
         props.fetchUser();
   } , 3000)
 }, [])
 
    return (
    <>
      <h1>User</h1>
      {props.loading ==true ? <h1>featching data...</h1> : <h2>{props.user.name}</h2>}
    </>
  );
}


function mapStateToProps(store){
    console.log(store.User);
    return store.User
}

function mapDispatchToProps(dispatch){
    return {
        fetchUser : () =>{
            return dispatch(userFetchMiddleWare);
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(UserAsync);

