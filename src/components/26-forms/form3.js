import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form3 = () => {
    
    const [formData, setFormData] = useState({
      firstName:"",
      lastName:"",
      email: "",
      phone: ""
    })


    console.log(formData)
 /*
    const formData{
        firstName:"",
        lastName:"",
        email: "",
        phone: ""
    }
   */ 

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
        <Form.Control
            
            type="text"
            placeholder="enter your first name"
            onChange={(e)=>setFormData({...formData, firstName: e.target.value})}
            value={formData.firstName}
        />
      
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
        <Form.Control
            
            type="text"
            placeholder="enter your last name"
            
            onChange={(e)=>setFormData({...formData, lastName: e.target.value})}
            value={formData.lastName}
        />
      
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
        <Form.Control
            
            type="email"
            placeholder="enter your email"
            onChange={(e)=>setFormData({...formData, email: e.target.value})}
            value={formData.email}
            
        />
      
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
        <Form.Control
            
            type="text"
            placeholder="enter your phone number"
            onChange={(e)=>setFormData({...formData, phone: e.target.value})}
            value={formData.phone}
            
        />
      
        </Form.Group>
        
      </Form>
    </Container>
  );
};

export default Form3;
