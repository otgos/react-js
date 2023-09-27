import React from 'react'

const Jsx2 = () => {

    // Any javascript codes can be written here

    const name = "John";
    const age = 34;

    const user = {
        name: "Tom", 
        salary : 4000
    }

  return (

    

    <div>
         {
         /* 
         to use javascript codes in this return area 
         we need to use curly brakets 
         */
         }

        <h2>Name is {name} </h2>
        <h2>Age is {age}</h2>
        <p>{user.name} earns ${user.salary}</p>
    </div>
  )
}

export default Jsx2