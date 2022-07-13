import React from "react";
import './AdminBooking.css';

function VehicleDetails({ formData, setFormData }) {
  return (
    <div className="vehicle-container">
      <label>Vehicle Brand:</label>
      <input
        type="text"
        placeholder="Vehicle Brand"
        value={formData.brand}
        onChange={(event) =>
          setFormData({ ...formData, brand: event.target.value })
        }
      />

      <label>Vehicle Name:</label>
      <input
        type="text"
        placeholder="Vehicle Name"
        value={formData.vehicle}
        onChange={(event) =>
          setFormData({ ...formData, vehicle: event.target.value })
        }
      />
    
    
    </div>
  );
}

export default VehicleDetails;
