import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

const CarManagement = () => {
    const [Data,setData] = useState([]);
    const [RowData,SetRowData]=useState([])
    const [ViewShow,SetViewShow]=useState(false)
    const handleViewShow = () =>{SetViewShow(true)}
    const handleViewClose = () =>{SetViewShow(false)}
    const GetCarData = () =>{
        //get car data
        const url = 'http://localhost:8000/Carmanagement'
        axios.get(url)
        .then(response=>{
            const result = response.data;
            const {status, message, data}=result;
            if(status !== 'SUCCESS'){
                alert(message,status)
            }
            else{
                setData(data)
                console.log(data)
            }
        }) 
        .catch(err=>{
            console.log(err)
        }) 
    }
    //call this function use in uneffect

    useEffect(()=>{
        GetCarData();
    },[])


    return(
        <div>
            <style type="text/css" >
        { `.navbar {display:none}` }
    </style>
    <style type="text/css" >
        { `.navbar1 {display:none}` }
    </style>
            <div className='row'>
                <div className='mt-5 mb-4'>
                <Button variant='primary'><i className='fa fa-plu'></i>
                Add New Employee
                </Button> 
                    </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Vehicle Title</th>
                                <th>Email</th>
                                <th>Brand</th>
                                <th>Price per Day</th>
                                <th>Fuel Type</th>
                                <th>Model Year</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {Data.map((item)=>
                           <tr key={item._id}>
                               <td>{item.title}</td>
                               <td>{item.email}</td>
                               <td>{item.brand}</td>
                               <td>{item.price}</td>
                               <td>{item.fuel}</td>
                               <td>{item.model}</td>
                               <td style={{minWidth:190}}>
                                   <Button size='sm' variant='primary' onClick={() => {handleViewShow(SetRowData(item))}}>View</Button>
                                   <Button size='sm' variant='warning'>Edit</Button>
                                   <Button size='sm' variant='danger'>Delete</Button>
                               </td>
                           </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='model-box-view'>
                <Modal
                   show={ViewShow}
                   onHide={handleViewClose}
                   backdrop="static"
                   keyboard={false}
                >
                   <Modal.Header closeButton>
                       <Modal.Title>View Car Data</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                       <div>
                           <div className='form-group'>
                               <input type="text" className='form-control' value={RowData.title} readOnly/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="email" className='form-control' value={RowData.email} readOnly/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="text" className='form-control' value={RowData.brand} readOnly/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="text" className='form-control' value={RowData.price} readOnly/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="text" className='form-control' value={RowData.fuel} readOnly/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="text" className='form-control' value={RowData.model} readOnly/>
                           </div>
                       </div>
                   </Modal.Body>  
                   <Modal.Footer>
                       <Button variant='secondary' onClick={handleViewClose}>Close</Button>
                   </Modal.Footer>  
                </Modal>

            </div>
        </div>



    );
};

export default CarManagement;