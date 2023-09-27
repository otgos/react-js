import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form5 = () => {
    
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
  
    const handleSubmit = (e)=>{
      e.preventDefault() //to stop default behavior of submit button
      

      try {
        if(!formData.firstName) throw new Error ("Please enter your first name")
        if(!formData.lastName) throw new Error ("Please enter your last name")
        if(!formData.email) throw new Error ("Please enter your email")
        if(!formData.phone) throw new Error ("Please enter your phone")
      } catch (error) {
        console.error(error)
        alert(error.message)
      }

      setTimeout(()=>{
        alert("You are registered successfully")
        setFormData({
          firstName:"",
          lastName:"",
          email: "",
          phone: ""
        })
        
      }, 1000)

    }

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit} method="post" noValidate>
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
        <Button variant="info" type="submit">Save</Button>
      </Form>
    </Container>
  );
};

export default Form5;
