import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import {GrAddCircle, GrSubtractCircle, GrPowerReset} from "react-icons/gr"
const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = (val) =>{

        if(val<=0)  val = 0;

        setCounter(val)
    }


  return (
    <Container className='mt-5'>
    <ButtonGroup aria-label="Basic example">
      <Button variant="danger" onClick={()=>handleClick(counter+1)}> <GrAddCircle/> </Button>
      <Button variant="secondary" disabled >{counter}</Button>
      <Button variant="success" onClick={()=>handleClick(counter-1)} disabled={!counter}> <GrSubtractCircle/> </Button>
      <Button variant="info" onClick={()=>setCounter(0)} disabled={!counter}> <GrPowerReset/> </Button>
    </ButtonGroup>
    </Container>
  )
}

export default Counter