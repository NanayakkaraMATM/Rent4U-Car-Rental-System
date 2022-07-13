import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./login.css";
import {Form, Button, Row, Col} from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(email, password);

    try {
        // To make api requests, we need to provide json data
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }

        setLoading(true)

        // make request

        const {data} = await axios.post('http://localhost:5000/users/login', {
            email, password,
        }, 
        config)

        // store data in local storage
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data))
        navigate('/carlist')

        setLoading(false)

    } catch (error) {
      alert("Invalid Email or Password")
        setError(error.response.data.message)
    }
}

  return (
    <div>
      <body className="zt">
	  <style type="text/css" >
    { `.main-container {display:none}` }
</style>
<style type="text/css" >
    { `.sidebar {display:none}` }
</style>
        <br />
		<div className="logincon"><br/>
		<h1 className="hw1">Login Form</h1><br/>
        <div className="group" >
                {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
                <Form onSubmit={submitHandler} style={{ width: "420px"}}>
                    <Form.Group className="l1" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" class="label" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required/> 
                    </Form.Group>

                    <Form.Group className="l1" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label><br></br>
                        <Form.Control type="password" class="label" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ width: "420px"}} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" class="btn">Login</Button>
                </Form><br/>
                <div className="xx">
                    <Col>
                        New User? <Link to="/signup">Register Here</Link>
                    </Col>
                </div>
            </div>
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
      </body>
    </div>
  );
}

export default Login;
