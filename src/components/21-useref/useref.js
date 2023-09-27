import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'

const UseRef = () => {

  const emailRef = useRef(null);

  const btnRef = useRef(null);

  const setFocus=()=>{

    console.log(emailRef)
    console.log(btnRef)

    emailRef.current.focus();
    emailRef.current.style.backgroundColor = "red"
    btnRef.current.style.color = "blue"
    
  }


  return (
    <Container className='mt-5'>
      <input type="text" placeholder='enter your email'  ref={emailRef} />
      <button onClick={()=>setFocus()} ref={btnRef}>Set Focus</button>
    </Container>
  )
}

export default UseRef