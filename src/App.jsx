
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("black")
 
  return (
    <>
    <div className='box' style={{backgroundColor :color}} >
 <button onClick={()=>setColor("red") }>RED</button>
 <button onClick={()=>setColor("blue") }>BLUE</button>
 <button onClick={()=>setColor("green")}>GREEN</button>
 <button onClick={()=>setColor("yellow")}>YELLOW</button>
 <button onClick={()=>setColor("olive")}>OLIVE</button>
 </div>
    </>
  )
}

export default App
