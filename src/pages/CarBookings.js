import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {Form, Button, Row, Col} from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CarBookings = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact_no, setContact_no] = useState("")
    const [location, setLocation] = useState("")
    const [handover_date, setHandover_date] = useState("")
    const [handover_time, setHandover_time] = useState("")
    const [return_date, setReturn_date] = useState("")
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

            const {data} = await axios.post('http://localhost:5000/newbooking/create', {
                name, email, contact_no, location, handover_date, handover_time, return_date
            }, 
            config)

            // store data in local storage
            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data))

            setLoading(false)

        } catch (error) {
            setError(error.response.data.message)
        }
    }

    const resetHandler = (e) => {
        e.target.reset()
    }
  return (
      <div>
          <h3>Booking Form</h3>
          <Form onSubmit={submitHandler}>
            
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                        type="name" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control 
                        required
                        value={contact_no}
                        onChange={(e) => setContact_no(e.target.value)} 
                        /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Handover Location</Form.Label>
                        <Form.Control 
                        type="name" 
                        value={location}
                        required
                        onChange={(e) => setLocation(e.target.value)} 
                        /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Handover Date</Form.Label>
                        <Form.Control 
                        value={handover_date}
                        required
                        onChange={(e) => setHandover_date(e.target.value)} 
                        /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Handover Time</Form.Label>
                        <Form.Control 
                        value={handover_time}
                        required
                        onChange={(e) => setHandover_time(e.target.value)} 
                        /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Return Date</Form.Label>
                        <Form.Control 
                        value={return_date}
                        required
                        onChange={(e) => setReturn_date(e.target.value)} 
                        /> 
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                    <Button variant="primary" type="submit" onClick={resetHandler}>Reset</Button>
                </Form>
      </div>
  )
   
};

export default CarBookings;
