import React , {useState , useContext} from "react";
import ChildA from "./ChildA";
import context from "./context";

function Parent2() {
  const [firstName , setFirstName] = useState(' Devesh')
  const [lastName , setLastName] = useState(' Mehra')

   return(

    <context.Provider value={{firstName , lastName}}>

       <h3>This is Parent</h3>
       <ChildA />

    </context.Provider>
   )

}
export default Parent2

// context is global storage if any node required that data then only use that