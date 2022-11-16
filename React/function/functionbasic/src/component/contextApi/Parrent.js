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
