import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const State = () => {
    
    const [mode, setMode] = useState("light");

    

    let className = "bg-light text-dark p-5";

    if(mode==="dark"){
      className = "bg-dark text-light p-5"
    }
      


     console.log(className)

  return (
    <div id="switcher" className={className}>
        <h1 className='text-center'>Dark/Light Mode Switcher</h1>
        <div className='d-flex justify-content-evenly'>
        <Button onClick={()=> setMode("dark")}> Dark Mode </Button>
        <Button onClick={()=> setMode("light")}> Light Mode </Button>
        </div>
    </div>
  )
}

export default State