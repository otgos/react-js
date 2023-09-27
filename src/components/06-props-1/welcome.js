import React from 'react'
import "./welcome.scss"

//1st method
// const Welcome = (props) => {

//   return (
//     <div className='welcome'>
//         <h2>Hello {props.firstName} {props.lastName}</h2>
//     </div>
//   )
// }

//2nd method
// const Welcome = (props) => {

//     //destructuring
//     const {firstName, lastName} = props;

//     return (
//       <div className='welcome'>
//           <h2>Hello {firstName} {lastName}</h2>
//       </div>
//     )
//   }

   // 3rd method
  const Welcome = ({firstName, lastName}) => {

    return (
      <div className='welcome'>
          <h2>Hello {firstName} {lastName}</h2>
      </div>
    )
  }
export default Welcome