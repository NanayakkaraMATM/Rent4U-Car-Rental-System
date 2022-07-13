import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";


const ConfirmedBookingList = () => {
  const [confirmedBookings, setConfirmedBookings] = useState([])
  const [ViewShow, SetViewShow] = useState(false);
  const [RowData, SetRowData] = useState([]);

  const editHandler = async () => {
    
  }


  const handleViewShow = (brand) => {
    SetViewShow(true);

    console.log("one")
    console.log(RowData)
    console.log("two")


    // setNewBrand(brand)
    // console.log("modal one")
    // console.log(newBrand)
    // console.log("modal two")

  };

  const handleViewClose = () => {
    SetViewShow(false);
  };
  

  useEffect(() => {
      fetchData();
    }, []);

  const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/newbooking/confirmed-bookings");
      console.log(data);
  
      setConfirmedBookings(data);
    };
  return (
    <div>
      
      <style type="text/css" >
        { `.navlink {display:none}` }
    </style>
    <style type="text/css" >
        { `.navbar {display:none}` }
    </style>
    <style type="text/css" >
        { `.navbar1 {display:none}` }
    </style>
      <h1 style={{ textAlign: "center", alignSelf: "center" }}>
        Confirmed Bookings
      </h1>

      {/* Report */}
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button btn btn-success mb-3"
        table="table-to-xls"
        filename="Confirmed Bookings Report"
        sheet="tablexls"
        buttonText="Bookings Report"
       
      />
      
      <table className="table table-striped table-hover table-bordered" id="table-to-xls">
            <thead>
              <tr>
              <th style={{fontSize: 25,width:250,textAlign: "center"  }}>Name</th>
            <th style={{fontSize: 25,width:250,textAlign: "center"   }}>Contact No.</th>
            <th style={{ fontSize: 25,width:250 ,textAlign: "center"  }}>Handover Date</th>
            <th style={{fontSize: 25,width:250 ,textAlign: "center"  }}>Return Date</th>
                <th style={{ fontSize: 25, width:300 ,textAlign: "center"  }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {confirmedBookings.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                
                  <td>{item.contact_no}</td>
                  <td>{item.handover_date}</td>
                  <td>{item.return_date}</td>
                  <td>
                  <Button size="sm" variant="warning" 
                  onClick={() => {
                          handleViewShow(SetRowData(item));
                       }}
                      >
                  View
                </Button>
                  </td>
             
                </tr>
              ))}
            </tbody>
          </table>

          <Modal show={ViewShow}
          onHide={handleViewClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Brand</Modal.Title>
        </Modal.Header>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                // value={brand_name}
                value={RowData.name}
                  // readOnly
                // onChange={(e) => setBrand_name(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Contact No.</Form.Label>
              <Form.Control
                type="name"
                value={RowData.contact_no}
                // onChange={(e) => setCreation_date(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Handover Date</Form.Label>
              <Form.Control
                type="name"
                value={RowData.handover_date}
                // onChange={(e) => setUpdation_date(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Return Date</Form.Label>
              <Form.Control
                type="name"
                value={RowData.return_date}
                // onChange={(e) => setUpdation_date(e.target.value)}
              />
            </Form.Group>
          </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleViewClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
    
  )
}

export default ConfirmedBookingList