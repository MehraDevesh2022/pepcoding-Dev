import React ,{useState} from 'react'

function Bat() {
  const [bat ,setBat] = useState(10);
  const [sellBat , setSellBat] = useState('');
  function buyBat(){
    setBat(bat + Number(sellBat));
    setSellBat('')
  }  

  function sellBats(){
    setBat(bat - Number(sellBat));
    setSellBat('')
  }
  
  return (
    <>
    <h1 style={{color : "black" , background : "red" , width : "30%" , border : "2px solid orange"}}>Bat with useSatate</h1>
     <h2>Total Bats : {bat}</h2>
     <input type="text" placeholder='Enter Number of Bat' value={sellBat} onChange ={(e)=>{setSellBat(e.target.value)}}></input>
     <h3>Buy A Bat Click it : <span><button onClick={buyBat}>Buy</button></span></h3>
     <h3>Sell A Batt Click it : <span><button onClick={sellBats}>Sell</button></span></h3>
    </>
  )
}

export default Bat