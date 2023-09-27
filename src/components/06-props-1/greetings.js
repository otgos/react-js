import React from 'react'
import Wel from './welcome'
import Welcome from './welcome'

const Greetings = () => {

  return (
    <div>
        <h1>Greetings component</h1>
        <Welcome firstName = "John" lastName="Doe" age="20" />
        <Welcome firstName = "Tom" lastName="Cruze" />
    </div>
  )
}

export default Greetings