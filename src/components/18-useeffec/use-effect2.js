import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const UseEffect2 = () => {
    const [counter, setCounter] = useState(0)

    
    useEffect(() => {
      
        document.title = `Hello ${counter}`
        
      
    }, [counter])
    

  return (
    <Container className='mt-5'>
        <h1>You have clicked {counter} times on the button below</h1>
        <button onClick={()=>setCounter(prev=>prev+1)}>Click Me</button>
    </Container>
  )
}

export default UseEffect2