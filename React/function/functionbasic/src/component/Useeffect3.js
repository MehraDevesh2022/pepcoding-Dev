// this is with depedency aaray with values

import React ,{useState , useEffect} from "react";

function Useeffect3(){
  const [count , setCount] = useState(0)
  const [ name , setName] = useState(' Devesh')

useEffect(()=>{
 document.title = `this is title ${count} ${name}`
}, [count]) // behave like componentDidMount() for both values of state and update for only count
              // we are passing count only in dependcy array hence use effect act as componentDidUpdate() for count only

  return(

    <>
    <h1>This is count from effect3 {count}</h1>
    <h1>This is name from effect3 {name}</h1>
    <button onClick={()=> setCount(count +1)}>+1</button>
    <button onClick={() => setName(' Luffy')}>Name</button>
    </>
  )
}

export default Useeffect3