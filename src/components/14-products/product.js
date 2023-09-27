import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Product = (props) => {
    console.log(props)
    const {image, title, desc, price } = props
  return (
    <Card className='h-100' style={{borderRadius: "5px", backgroundColor:"white", padding:0, paddingTop: "1rem"}}>
      <Card.Img variant="top" src={require(`./images/${image}`)} />
      <Card.Body className='text-center d-flex flex-column justify-content-between align-items-center '>
        <Card.Title className='fs-3'> {title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Card.Subtitle className='fs-3 text-primary'>
           <strong>${price}</strong>
        </Card.Subtitle>
        <Button variant="warning">Add to card</Button>
      </Card.Body>
    </Card>
  )
}

export default Product