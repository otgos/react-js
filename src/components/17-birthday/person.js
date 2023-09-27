import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import {MdDelete} from "react-icons/md"

const Person = ({id, image, name, age, deletePerson}) => {
  return (
    <Card className='mt-4 position-relative'>
        <Row>
            <Col md={3}>
                <Card.Img src={require(`./images/${image}`)}/>
            </Col>
            <Col md={9}>
                <Card.Title className='fs-3'>{name}</Card.Title>
                <Card.Text className='fs-4'>{age}</Card.Text>
            </Col>

        </Row>
        <span className='position-absolute end-0 bottom-0 me-3 mb-2 text-danger fs-3' onClick={()=>deletePerson(id)}><MdDelete/></span>
    </Card>
  )
}

export default Person