import React ,{useState} from "react";
import ChildA from "./ChildA";
function Parrent(){
const [firstName , setFirstName] = useState(' Will');
const [lastName , setlastName] = useState(' Smith');
return(
<>
<h1>this is Parrent</h1>
  <ChildA firstName ={firstName} lastName ={lastName}/>
</>

)
}
export default Parrent
// this is prop drilling => here we need prop into the child c componenet only from parent but for shake we are passing prop into every child node bz child c is last node here
// so if any of them data not requird but we are sending for every node so this is not good practice to send data every node
// hence context api is come into picture 