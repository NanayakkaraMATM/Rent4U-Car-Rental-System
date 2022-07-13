import React from 'react';
import { NavLink } from 'react-router-dom';
import navi from '../images/navi.jpg';



function Navbar(){
    return <div className='navbar1'><div className='navbar'>
          <img src={navi} />
        
        <div className='navlink' >
            

        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/" >Home</NavLink>
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/carlist" >CarList</NavLink>
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/gallary" >Gallary</NavLink>
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/aboutus" >AboutUs</NavLink>
       
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/admin" >Admin</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/Login" ><button className='lb'> Login </button>  </NavLink>
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/signup" ><button className='lb'>SignUp</button></NavLink>

        
        </div>

  </div>  </div>;
}







export default Navbar;