import React from "react";
function ChildC({firstName , lastName}){
   return(
  <>
           <h1 style={{background : "blue" , color : "red"}}>this is from Childc</h1>
           <h2>My first name is <strong style={{color : "blue"}}>{firstName}</strong> and last name is <strong style={{color :"red"}}>{lastName}</strong></h2>
  </>
   )
}
export default ChildC
