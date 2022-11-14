import React , {useState} from "react";

function Test(){
    
   const [count ,setCount] = useState(0); 
   let [text , setText] = useState('')
    return(
     
            // <div>
            //     <h1>This is {count}</h1>
            //     <button onClick={() => setCount(count + 1)}>+1</button>
            //     <button onClick={() => setCount(count - 1)}>-1</button>
            // </div()
            <>
            <h1>{text}</h1>
            <input type="text" value={text} onChange ={(e)=> setText(e.target.value)}/>
        {console.log(text)}
            </>
      
   )
}
export default Test