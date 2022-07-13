import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const CarManagement = () => {
  const [brand_name, setBrand_name] = useState();
  const [creation_date, setCreation_date] = useState();
  const [updation_date, setUpdation_date] = useState();
  const [brands, setBrands] = useState([]);
  const [newBrand, setNewBrand] = useState();
  const [RowData, SetRowData] = useState([]);
  const [show, setShow] = useState(false);
  const [ViewShow, SetViewShow] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [testObj, setTestObj] = useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleViewShow = (brand) => {
    SetViewShow(true);

    console.log("one");
    console.log(RowData);
    console.log("two");

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
    const { data } = await axios.get("http://localhost:5000/brands/");
    console.log(data);

    setBrands(data);
  };

  const handleBrand = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      // make request

      const { data } = await axios.post(
        "http://localhost:5000/brands/create",
        {
          brand_name,
          creation_date,
          updation_date,
        },
        config
      );

      window.location.reload();

      // store data in local storage
      console.log(data);
      // localStorage.setItem('userInfo', JSON.stringify(data))
      // navigate('/car-management')

      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/brands/${id}`);
      console.log("Item successfully deleted.");
      alert("Brand deleted");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  const editHandler = async (id)  => {
    console.log("abc");
    console.log(id)
    console.log("def");

    try {
      const config = {
        headers:{
            "Content-type":"application/json"
        }
    }

      const res = await axios.put(`http://localhost:5000/brands/${id._id}`, {
        brand_name: id.brand_name, creation_date: id.creation_date, updation_date: id.updation_date
      }, config);
      console.log("Item successfully edited");
      alert("Brand edited");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  const selectUser = () => {
    console.log("function called");
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
        Brand Management
      </h1>
      <div className="mt-5 mb-4">
        <Button variant="primary" onClick={handleShow}>
          <i className="fa fa-plu"></i>
          Add New Brand
        </Button>
      </div>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button btn btn-success mb-3"
        table="table-to-xls"
        filename="brands"
        sheet="tablexls"
        buttonText="Export Data"
      />
      <Table striped bordered hover id="table-to-xls">
        <thead>
          <tr>
            <th style={{ fontSize: 25 }}>Brand Name</th>
            <th style={{ fontSize: 25 }}>Creation Date</th>
            <th style={{ fontSize: 25 }}>Updation Date</th>
            <th style={{ fontSize: 25 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand._id} style={{ fontSize: 15 }}>
              <td>{brand.brand_name}</td>
              <td>{brand.creation_date}</td>
              <td>{brand.updation_date}</td>
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
                <Button size="sm" variant="warning" onClick={() => {
                         handleViewShow(SetRowData(brand));
                      }}>
                  Edit
                </Button>
                {/* <Button
                  size="sm"
                  variant="warning"
                  onClick={() => {
                    selectUser(brand._id);
                  }}
                >
                  Edit
                </Button> */}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteHandler(brand._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Brand Modal  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                type="name"
                value={brand_name}
                onChange={(e) => setBrand_name(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Creation Date</Form.Label>
              <Form.Control
                type="name"
                value={creation_date}
                onChange={(e) => setCreation_date(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Updation Date</Form.Label>
              <Form.Control
                type="name"
                value={updation_date}
                onChange={(e) => setUpdation_date(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleBrand}>
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Edit Brand Modal  */}

      <Modal show={ViewShow}
          onHide={handleViewClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Brand</Modal.Title>
        </Modal.Header>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                type="name"
                value={RowData.brand_name}
                onChange={(e) => SetRowData({...RowData, brand_name: e.target.value})}
                // onChange={(e) =>setTestObj({...testObj , brand_name: testObj.amount + 100 })}
                
                // onChange={(e) => setBrand_name(e.target.value)}
                // onChange={(e) => SetRowData(e.target.value)}

               
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Creation Date</Form.Label>
              <Form.Control
                type="name"
                value={RowData.creation_date}
                onChange={(e) => SetRowData({...RowData, creation_date: e.target.value})}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Updation Date</Form.Label>
              <Form.Control
                type="name"
                value={RowData.updation_date}
                onChange={(e) => SetRowData({...RowData, updation_date: e.target.value})}
                
                
              />
            </Form.Group>
          </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleViewClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {editHandler(RowData)}}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal show={ViewShow} onHide={handleViewClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Brand</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control
              type="name"
              // value={brand_name}
              value={RowData.brand_name}
              // readOnly
              onChange={(e) => SetRowData(e.target.value)}
              // onChange={(e) => setBrand_name(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Creation Date</Form.Label>
            <Form.Control
              type="name"
              value={RowData.creation_date}
              onChange={(e) => SetRowData(e.target.value)}
              // onChange={(e) => setCreation_date(e.target.value)}
              // onChange={(e) => setCreation_date(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Updation Date</Form.Label>
            <Form.Control
              type="name"
              value={RowData.updation_date}
              onChange={(e) => SetRowData(e.target.value)}

              // onChange={(e) => setUpdation_date(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleViewClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editHandler}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default CarManagement;
