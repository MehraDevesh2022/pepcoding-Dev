import React , {useContext} from "react";
import context from "./context";
function ChildC(){
 let {firstName , lastName} = useContext(context) 
 return(
<>


         <h1> this is ChildC</h1>
         <h1 style={{ color: "red" }}>{firstName}</h1>
         <h1 style={{ color: "blue" }}>{lastName}</h1>
</>
 
 )
}
export  default ChildC