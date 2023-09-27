import React from 'react'
import image3 from "../../assets/images/image3.jpg"


const Image = () => {
  return (
    <div>
       {/* if we are getting image url  */}
      <img src="https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"  width="500px" alt="" />

      {/* in static method, the image location should inside public folder */}
      <img src="assets/img/image1.jpg" alt="" />


      {/*  import and require images should be inside src folder
          when to use ?
            --if images are from backend side or external files
            like json use require
            --if images are in src folder we can use import
      */}

      <img src={image3} alt="" width="500px"/>
      
      <img src={require("../../assets/images/image4.jpg")} width="500px" alt="" />

    </div>
  )
}

export default Image