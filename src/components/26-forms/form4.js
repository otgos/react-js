import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form4 = () => {
    
    const [formData, setFormData] = useState({
      firstName:"",
      lastName:"",
      email: "",
      phone: ""
    })

    console.log(formData)
    const handleFormData=(e)=>{
      const {name, value} =e.target;
      //console.log(name, value)

      setFormData({...formData, [name]: value})
    }
  

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
        <Form.Control
            name="firstName"
            type="text"
            placeholder="enter your first name"
            onChange={(e)=>handleFormData(e)}
            value={formData.firstName}
        />
      
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
        <Form.Control
            name="lastName"
            type="text"
            placeholder="enter your last name"
            
            onChange={(e)=>handleFormData(e)}
            value={formData.lastName}
        />
      
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
        <Form.Control
            name="email"
            type="email"
            placeholder="enter your email"
            onChange={(e)=>handleFormData(e)}
            value={formData.email}
            
        />
      
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
        <Form.Control
            name="phone"
            type="text"
            placeholder="enter your phone number"
            onChange={(e)=>handleFormData(e)}
            value={formData.phone}
            
        />
      
        </Form.Group>
        
      </Form>
    </Container>
  );
};

export default Form4;
