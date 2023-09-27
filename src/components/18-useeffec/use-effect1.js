import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const UseEffect1 = (props) => {

    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    console.log(`When state is updated, all JavaScript and JSX (inside return) codes willl 
                be re-rendered.
                This line will be executed before JSX (codes inside return)`)

    useEffect(()=>{
         console.log(`MOUNTING: This message will be rendered 
         only once on first load. Here we need to keep codes
         that should be rendered at initial load.
         For example api connection`)

         return ()=>{
          console.log( "UNMOUNTING: this function will execute when component unmounts (when we leave component)")
         }
    }, [])

    useEffect(()=>{
        console.log(`UPDATING: These codes will be re-rendered whenever 
        component is rendered. But this code will be executed after JSX
        So we can reach out those element using useRef hook`)
   })

   useEffect(()=>{
    console.log(`UPDATING: This code will track state ("message") or props and will be
     rendered when message or props is updated`)
}, [message, props])

  return (
    <Container className='mt-4'>
        <div>{message}-{error}</div>
        <Button variant='info' onClick={()=>setMessage("Hello"+Math.random())}>Set Message </Button>
        <Button variant='danger' onClick={()=>setError("Some errors")}>Throw Error </Button>
    </Container>
  )
}

export default UseEffect1