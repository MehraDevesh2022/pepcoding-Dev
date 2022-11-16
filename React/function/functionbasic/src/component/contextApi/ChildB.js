import React ,{useContext} from "react";
import context from "./context";
import ChildC from "./ChildC";

function ChildB() {
  return(

    <>
    <h3>this is ChildB</h3>
    <ChildC/>
    </>
  )
}
export default ChildB