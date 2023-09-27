import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form2 = () => {
    
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)

    useEffect(() => {
      
      setNum3(Number(num1) +Number(num2) )
    
      
    }, [num1, num2])
    

    //console.log(name)
  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3">
        <Form.Control
            
            type="number"
            placeholder="enter num1"
            onChange={(e)=>setNum1(e.target.value)}
            value={num1}
        />
      
        </Form.Group>
        

        <Form.Group className="mb-3">
        <Form.Control
            type="number"
            placeholder="enter num2"
            onChange={(e)=>setNum2(e.target.value)}
            value={num2}
        />
        </Form.Group>
        
        
        <Form.Group className="mb-3">
        <Form.Control
            type="number"
            disabled
            onChange={(e)=>setNum3(e.target.value)}
            value={num3}
        />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Form2;
