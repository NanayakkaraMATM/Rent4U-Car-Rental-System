import React from "react";
import './AdminBooking.css';

function CustomerDetails({ formData, setFormData }) {
  return (
    <div className="customer-container">
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <label>Contact No:</label>
      <input
        type="text"
        placeholder="Conatact No"
        value={formData.contact_no}
        onChange={(e) => {
          setFormData({ ...formData, contact_no: e.target.value });
        }}
      />
     
    </div>
  );
}

export default CustomerDetails;