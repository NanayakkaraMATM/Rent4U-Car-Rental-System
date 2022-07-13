import React, { useState,useEffect } from "react";
import VehicleDetails from "./VehicleDetails";
import CustomerDetails from "./CustomerDetails";
import BookingDetails from "./BookingDetails";

import bookingService from "../service/bookingService";

const AdminBookings = () => {
  const [page, setPage] = useState(0);
  const [disabledFlag,setDisabledFlag]=useState(false);
  const [formData, setFormData] = useState({
    brand: "",
    vehicle: "",
    name: "",
    contact_no: "",
    handover_date: "",
    return_date: "",
    // handoverTime: "",
  });

  useEffect(()=>{
    onNextButtonDisable();
  },[formData,page])

  const adminBookingSubmit = (e) => {
    e.preventDefault();
    // if (page === FormTitles.length - 1) {
    //   alert("BOOKING SUBMITTED");
    //   console.log(formData);
    // } else {
    //   setPage((currPage) => currPage + 1);
    // }
    console.log("Form Data: ", formData);
    if (page === FormTitles.length - 1) {
      bookingService.adminBooking(formData).then(
        (data) => {
          console.log(data);

          // alert(data);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          alert(resMessage);
        }
      );
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  const FormTitles = ["Vehicle Details", "Customer Details", "Booking Details"];

  const PageDisplay = () => {
    if (page === 0) {
      return <VehicleDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <CustomerDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <BookingDetails formData={formData} setFormData={setFormData} />;
    }
  };

  const onNextButtonDisable = ()=>{
    if(page === 0 && formData.brand === "" && formData.vehicle === ""){
      setDisabledFlag(true)
    }else if(page === 1 && formData.name === "" && formData.contact_no === ""){
      setDisabledFlag(true)
    }else if(page === 2 && formData.handover_date === "" && formData.return_date === ""){
      setDisabledFlag(true)
    }else{
      setDisabledFlag(false)
    }
  }

  return (
    <div className="title">
      <style type="text/css">{`.navlink {display:none}`}</style>
      <style type="text/css">{`.navbar {display:none}`}</style>
      <style type="text/css">{`.navbar1 {display:none}`}</style>

      <div className="form">
        <div className="progressbar">
          <div
            style={{
              width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
            }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="bodyl">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Back
            </button>
            <button onClick={adminBookingSubmit} disabled={disabledFlag}>
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBookings;
