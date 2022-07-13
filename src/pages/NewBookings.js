import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import './NewBookings.css';

const NewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handover_date, setHandover_date] = useState();
  const [contact_no, setContact_no] = useState();
  const [return_date, setReturn_date] = useState();
  const [RowData, SetRowData] = useState([]);
  const [noOfRows, setNoOfRows] = useState(1);
  const [search, setSearch] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = (booking) => {
    setShow(true);
    console.log(RowData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/newbooking/");
    console.log("one");
    console.log(data);
    console.log("two");

    setBookings(data);
  };

  const cancelHandler = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/newbooking/${id}`);
      console.log("Item successfully deleted.");
      alert("Booking Cancelled");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  const confirmHandler = async (id) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const res = await axios.put(
        `http://localhost:5000/newbooking/update-confirmed-booking/${id}`
      );
      console.log("Booking successfully updated.");
      alert("Booking Confirmed");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  const editHandler = async (booking) => {
    console.log("abc");
    console.log(booking);
    console.log("def");

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const res = await axios.put(
        `http://localhost:5000/newbooking/update-booking/${booking._id}`,
        {
          name: booking.name,
          contact_no: booking.contact_no,
          handover_date: booking.handover_date,
          return_date: booking.return_date,
        },
        config
      );
      console.log("Item successfully edited");
      alert("Booking edited");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    
    <div className="title">
      <body className="bodynew">
      <style type="text/css">{`.navlink {display:none}`}</style>
      <style type="text/css">{`.navbar {display:none}`}</style>
      <style type="text/css">{`.navbar1 {display:none}`}</style>

      <h1 style={{ textAlign: "center", alignSelf: "center",fontFamily: "Lucida Console" , color: "#01002a" ,fontSize:50}}>New Bookings</h1>


   {/* search  */}
      <div>
      <input 
        type="text"
        placeholder="Search"
        style={{height: "40px", fontSize:"20px", width: "250px", marginLeft: "1100px"}}
        onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Table striped bordered hover id="table-to-xls" >
        <thead>
          <tr>
            <th style={{fontSize: 25,width:250}}>Name</th>
            <th style={{ fontSize: 25,width:250}}>Contact No.</th>
            <th style={{ fontSize: 25,width:250}}>Handover Date</th>
            <th style={{ fontSize: 25,width:250 }}>Return Date</th>
            <th style={{ fontSize: 25, height: 10, width:300}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.filter((val) => {
            if(search === "") {
              return val
            } else if(
              val.name.toLowerCase().includes(search.toLowerCase())

            ){
              return val
            }
          } 

          ).map((booking) => (
            <tr key={booking._id} style={{ fontSize: 15}}>
              <td>{booking.name}</td>
              <td>{booking.contact_no}</td>

              <td>{booking.handover_date}</td>

              <td>{booking.return_date}</td>
              <td>
           
                <Button
                  size="sm"
                  style={{ display:"flex", marginLeft:80}}
                  variant="primary"
                  onClick={() => {
                    handleShow(SetRowData(booking));
                  }}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  style={{ display:"flex", marginLeft:130, marginTop:-30}}
                  variant="success"
                  onClick={() => confirmHandler(booking._id)}
                >
                  Confirm
                </Button>
                <Button
                  size="sm"
                  style={{ display:"flex",marginLeft:200, marginTop:-30}}
                  variant="warning"
                  onClick={() => cancelHandler(booking._id)}
                >
                  Cancel
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Booking Modal  */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="table_new">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
    
                value={RowData.name}
                onChange={(e) =>
                  SetRowData({ ...RowData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contact No.</Form.Label>
              <Form.Control
                value={RowData.contact_no}
                onChange={(e) =>
                  SetRowData({ ...RowData, contact_no: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Handover Date</Form.Label>
              <Form.Control
             
                value={RowData.handover_date}
            
                onChange={(e) =>
                  SetRowData({ ...RowData, handover_date: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Return Date</Form.Label>
              <Form.Control
                value={RowData.return_date}
               
                onChange={(e) =>
                  SetRowData({ ...RowData, return_date: e.target.value })
                }
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              editHandler(RowData);
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
      </body>
    </div>
  );
};

export default NewBookings;