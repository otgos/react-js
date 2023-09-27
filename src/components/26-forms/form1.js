import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form1 = () => {
    
    const [name, setName] = useState("")

    //console.log(name)
  return (
    <Container className="mt-5">
      <Form>
        <h1>Hello {name}</h1>
        <Form.Control
            type="text"
            placeholder="enter your name"
            onChange={(e)=>setName(e.target.value)}
        >


        </Form.Control>
      </Form>
    </Container>
  );
};

export default Form1;
