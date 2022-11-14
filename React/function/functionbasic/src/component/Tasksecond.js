import React ,{useState} from "react";

function Tasksecond(){
  let [task , setTask] = useState('')
   let [arrtask ,setArrtask] = useState([])

  let addItam =(itam)=>{
       setArrtask([...arrtask ,itam])
       setTask('')
   }
  return(
    <>
    <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={()=>addItam(task)}>Add button</button>
    <ul>
        {
            arrtask.map((val) =>{
                return <li>{val}</li>
            })
        }
    </ul>
    </>
  )
}
export default Tasksecond