import React from 'react'

const Events = () => {

    const sayHello1 = () => {
        alert("Hello")
    }
    const sayHello2 = (name) => {
        alert(`Hello ${name}`)
    }

  return (
    <div>
        <div onClick={sayHello1} >Say Hello 1</div>
        <div onClick={()=>sayHello2("John")} >Say Hello 2</div>
    </div>
  )
}

export default Events