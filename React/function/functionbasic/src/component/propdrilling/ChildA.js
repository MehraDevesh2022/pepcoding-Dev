import React from "react";
import ChildB from "./ChildB";

function ChildA({firstName , lastName}){
 return(
     <>
         <h3>This is from ChildA</h3>
         <ChildB firstName={firstName} lastName={lastName} />
     </>
 )
}
export default ChildA