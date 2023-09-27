import React from 'react'
import Product from './product'

const CardContainer = () => {
  return (
    <div>
        <Product name="John">
            <h1>Sony Dispay</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
            <h5>price</h5>
         </Product>

        <Product>
            <h1>Dell Processor </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </Product>

        <Product>
            <h1>Dell Processor </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>
        </Product>
    </div>
  )
}

export default CardContainer