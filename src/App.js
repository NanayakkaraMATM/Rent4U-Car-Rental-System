import { Route, Routes } from "react-router-dom";

import { useEffect } from "react";

import "./App.css";
import AboutUs from "./components/aboutus.component";
import Admin from "./components/admin.component";
import CarListComponent from "./components/CarListComponent";
import Gallary from "./components/gallary.component";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Slider from "./pages/Slider";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./pages/Dashboard";

import AdminBookings from "./pages/AdminBookings";
import BrandManagement from "./pages/BrandManagement";
import CancelledBookings from "./pages/CancelledBookings";
import CarBookings from "./pages/CarBookings";
import CarManagement from "./pages/CarManagement";
import ConfirmedBookingList from "./pages/ConfirmedBookingList";
import NewBookings from "./pages/NewBookings";
import UserBooking from "./pages/UserBooking";
import AdminDashboard from "./pages/AdminDashboard";
import SideBar from "./components/SideBar";

function App() {
  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/Carmanagement', {mode:'cors'});
  //     const data = await response.json();
  //     console.log({ data })
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }
  // useEffect(() => {
  //   makeAPICall();
  // }, [])

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/carlist" element={<CarListComponent />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />}  exact />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/my-bookings" element={<UserBooking />} />
       
      </Routes>

      <SideBar>
        <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-bookings" element={<AdminBookings />} />
          <Route path="/Brand-management" element={<BrandManagement />} />
          <Route path="/cancelled-bookings" element={<CancelledBookings />} />
          <Route path="/car-bookings" element={<CarBookings />} />
          <Route path="/new-bookings" element={<NewBookings />} />
          <Route path="/car-management" element={<CarManagement />} />
          <Route
            path="/confirmed-bookings"
            element={<ConfirmedBookingList />}
          />

        </Routes>
      </SideBar>
    </div>
  );
}

export default App;
