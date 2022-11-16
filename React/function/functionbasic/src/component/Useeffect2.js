// with empty dependency array  

import React , {useState , useEffect} from "react";


function Useeffect2(){
    const [count , setCount] = useState(0);
    const [name , setName] = useState(' Devesh')

useEffect(()=>{
    document.title = `this is title ${count} ${name}`
}, []) // with empty dependency array use effect behave like a componentDidMount() only for initital value of name and count
        // when state of count and name will change then nothing will happned with useEffect bcz of  empty dependency array

    return(
  <>
            <h1>this is count{count}</h1>
            <h1>this is Name{name}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setName(' Rahul Roy')}>Name</button>

  </>
    )
}
export default Useeffect2