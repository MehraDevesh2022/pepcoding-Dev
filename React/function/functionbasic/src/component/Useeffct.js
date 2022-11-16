// without depedenecy array
import React, { useState, useEffect } from 'react';

function Useeffect(){
const [count, setCount] = useState(0);
const  [name , setName] = useState(' Devesh')
useEffect(()=>{
    document.title= `this is title  ${ count} ${name}`
}) // this is behave like componentDidMount() for initial value of count and name 
  //  also behave componentDidUpdate() when count and name state will chanage

return(
    <>
    <h1>press the button for count{count}</h1>
    <h1>press the button for name{name}</h1>
    <button onClick={()=>setCount( count+1)}>+1</button>
    <button onClick={()=>setName(' Luffy')}>Name</button>
    </>
)
}
export  default Useeffect