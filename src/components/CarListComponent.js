import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Table, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

const CarListComponent = () => {
  const [cars, setCars] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_no, setContact_no] = useState();
  const [location, setLocation] = useState("");
  const [handover_date, setHandover_date] = useState();
  const [handover_time, setHandover_time] = useState("");
  const [return_date, setReturn_date] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigete = useNavigate()

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const { data } = await axios.get("http://localhost:5000/get-all-cars");

    console.log(data);
    setCars(data);
  };

  const bookHandler = async (e) => {
    e.preventDefault();
    

    try {
        
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }

        setLoading(true)

        // make request

        const {data} = await axios.post('http://localhost:5000/newbooking/create', {
            name, email, contact_no, handover_date, return_date
        }, 
        config)

        alert("Booking Added!")
        handleClose()
        // navigete('/my-bookings')

        // store data in local storage
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data))

        setLoading(false)

    } catch (error) {
        setError(error.response.data.message)
    }

  }

  const bookingList = () => {
    navigete('/my-bookings')
  }

  return (
    <div style={{  alignItems:'center'}}>
      <style type="text/css">{`.main-container {display:none}`}</style>
      <style type="text/css">{`.sidebar {display:none}`}</style>
      <style type="text/css">{`.top_section {display:none}`}</style>
      <h1 style={{ textAlign: "center", alignSelf: "center" }}>Select a Car</h1>

      <Button variant="success" onClick={bookingList}>See My Bookings</Button> <br></br>

      <div style={{  alignItems:'center'}}>
        {cars.map((car) => (
          <Card style={{ width: "18rem" }} key={car._id}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{car.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {car.brand}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {car.fuel}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {car.price} LKR
              </Card.Subtitle>
              <Button variant="primary" onClick={handleShow}>
                Book
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {/* Book Modal  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book a car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control 
                        required
                        value={contact_no}
                        onChange={(e) => setContact_no(e.target.value)} 
                        /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Handover Date</Form.Label>
                        <Form.Control 
                        required
                        value={handover_date}
                        onChange={(e) => setHandover_date(e.target.value)} 
                        
                        /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Return Date</Form.Label>
                        <Form.Control 
                        required
                        value={return_date}
                        onChange={(e) => setReturn_date(e.target.value)} 
                        /> 
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Return Date</Form.Label>
                        <Form.Control 
                        value={return_date}
                        required
                        onChange={(e) => setReturn_date(e.target.value)} 
                        />  */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={bookHandler}>
            Book
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CarListComponent;