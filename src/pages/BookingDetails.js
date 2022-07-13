import React from "react";
import './AdminBooking.css';

function BookingDetails({ formData, setFormData }) {
  return (
    <div className="booking-container">
      <label>Handover Date:</label>
      <input
        type="date"
        placeholder="Handover Date"
        value={formData.handover_date}
        onChange={(e) => {
          setFormData({ ...formData, handover_date: e.target.value });
        }}
      />
      <label>Return Date:</label>
      <input
        type="date"
        placeholder="Return Date"
        value={formData.return_date}
        onChange={(e) => {
          setFormData({ ...formData, return_date: e.target.value });
        }}
      />
      {/* <input
        type="time"
        placeholder="Handover Time"
        value={formData.handoverTime}
        onChange={(e) => {
          setFormData({ ...formData, handoverTime: e.target.value });
        }}
      /> */}
    </div>
  );
}

export default BookingDetails;