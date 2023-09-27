import React from 'react'
import "./card.scss"

const Product = (props) => {
    const {name} = props
  return (
    <div className='card-product'>
        {name}
        {props.children}
    </div>
  )
}

export default Product