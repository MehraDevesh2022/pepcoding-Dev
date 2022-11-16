import React from "react";
import ChildC from "./ChildC";
function ChildB({firstName , lastName}){
    return(
        <>
        <h3>this is from ChildB</h3>
        <ChildC  firstName ={firstName} lastName ={lastName}/>
        </>
    )
}
export default ChildB 