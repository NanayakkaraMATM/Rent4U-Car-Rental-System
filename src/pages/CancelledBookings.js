import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const CancelledBookings = () => {
  const [cancelledBookings, setCancelledBookings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/newbooking/cancelled-bookings"
    );
    console.log(data);

    setCancelledBookings(data);
  };

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/newbooking/${id}`);
      console.log("Item successfully deleted.");
      alert("Booking deleted");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="title">
      <style type="text/css">{`.navlink {display:none}`}</style>
      <style type="text/css">{`.navbar {display:none}`}</style>
      <style type="text/css">{`.navbar1 {display:none}`}</style>

      <h1 style={{ textAlign: "center", alignSelf: "center" }}>
        Cancelled Bookings
      </h1>

      <Table striped bordered hover id="table-to-xls">
        <thead>
          <tr>
          <th style={{fontSize: 25,width:250,textAlign: "center"  }}>Name</th>
            <th style={{fontSize: 25,width:250,textAlign: "center"   }}>Contact No.</th>
            <th style={{ fontSize: 25,width:250 ,textAlign: "center"  }}>Handover Date</th>
            <th style={{fontSize: 25,width:250 ,textAlign: "center"  }}>Return Date</th>
                <th style={{ fontSize: 25, width:300 ,textAlign: "center"  }}>Action</th>

            {/* <th style={{ fontSize: 25 }}>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {cancelledBookings.map((booking) => (
            <tr key={booking._id} style={{ fontSize: 15 }}>
             <td>{booking.name}</td>
                  <td>{booking.contact_no}</td>
              
                 
                  <td>{booking.handover_date}</td>
                  
                  <td>{booking.return_date}</td>
                  <td>
                {/* <Button
                  size="sm"
                  variant="primary"
                  //   onClick={() => {
                  //     handleViewShow(SetRowData(item));
                  //   }}
                >
                  View
                </Button> */}
                
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteHandler(booking._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CancelledBookings;