import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import * as Yup from "yup";

const Form6 = () => {

    //1st step - initial state defined
    const initialValues = {
        email: "",
        password: "",
        remember : false
    }

    //2nd step - Yup validation schema
    const validationSchema = Yup.object({
        email : Yup.string()
        .email("enter valid email")
        .required("should not be empty"),

        password: Yup.string().required("enter password")
    })

    //3rd step - onSubmit handler
    const onSubmit = async(values) =>{
        
        try {
            const resp = await axios.post("https://example.com/login", values)
            console.log(resp.data);
            localStorage.setItem("token", resp.data.token)

        } catch (error) {
            console.log(error)
            alert(error.resp.data.message)
        }

    }

    const formik  = useFormik ({
        initialValues,
        validationSchema,
        onSubmit
    })





  return (
    <Container className='mt-5'>
        <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        
        // name='email'
        // onChange={()=>formik.handleChange("email")}
        // value={formik.values["email"]}

        {...formik.getFieldProps("email")} //to update formik state
        isInvalid={formik.touched.email && !!formik.errors.email} //if it is not valid
        isValid = {formik.touched.email && !formik.errors.email} // if it is valid

        />
        {/* to see see message */}
        <Form.Control.Feedback type="invalid"> 
                  {formik.errors.email}
                </Form.Control.Feedback> 
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        {...formik.getFieldProps("password")}
        isInvalid={formik.touched.password &&  !!formik.errors.password}
        isValid = {formik.touched.password && !formik.errors.password}
        />
         <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Form6