import React,{useState} from "react";
import axios from "axios";
import './register.css';
import Cont from "../images/cont.png";
import printerest from "../images/printerest.png";
import Gle from "../images/gle.png";
import Twt from "../images/Twt.png";
import Youtb from "../images/Youtb.png";
import Facebk from "../images/faceb.png";
import In from "../images/in.png";

export default function Booking(){

  const [name, setName] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [email, setEmail] = useState("");
  const [handover_location, setHandover_location] = useState("");
  const [handover_date, setHandover_date] = useState("");
  const [handover_time, setHandover_time] = useState("");
  const [return_date, setReturn_date] = useState("");


   function sendDatab(e){
     e.preventDefault();

  const newBooking ={
    name,
    contact_no,
    email,
    handover_location,
    handover_date,
    handover_time,
    return_date
   }
   axios.post("http://localhost:8000/book",newBooking).then(()=>{
     alert("Added")
   }).catch((err)=>{
     alert("Please check the feilds and enter data accurately")
   })
  }

  return(
    <div>
      <body className="boo"><br/><br/>
      <div className="boo1">
      <form onSubmit={sendDatab}><br/>
      <div >
      <br/> <div className="boo2"> <h1>Make a Booking</h1></div>
       <div className="boo3">   <p>Please fill in this form to book a vehicle.</p></div>
    <hr/>

  <div className="boo4">
    <label >Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" className="boo5" name="username"  onChange={(e)=>{setName(e.target.value);}} required/>
   <br/>
  </div>
  <div className="boo4">
    <label >NIC</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" className="b005" name="nic" onChange={(e)=>{setContact_no(e.target.value);}} required/>
    
  </div>
  <div className="boo4">
    <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" className="boo5" name="email"  onChange={(e)=>{setEmail(e.target.value);}} required/><br/>
  
  </div>
  <div className="boo4">
    <label>Handover Location</label>&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" className="boo5" name="handover_location"  onChange={(e)=>{setHandover_location(e.target.value);}} required/>
  </div>

  <div className="boo4">
    <label>Handover Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="date" className="boo5" name="handover_date"  onChange={(e)=>{setHandover_date(e.target.value);}} required/>
  </div>

  <div className="boo4">
    <label>Handover Time</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="time" className="boo5" name="handover_time"  onChange={(e)=>{setHandover_time(e.target.value);}} required/>
  </div>
  

  <div className="boo4">
    <label>Return Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="date" className="boo5" name="return_time"  onChange={(e)=>{setReturn_date(e.target.value);}}/>
  </div>
  <br/>
  <button  type="submit" class="b006">Submit</button><br/><br/>
  </div><br/></form></div>
 <br/><br/><br/><br/><br/><br/><br/><br/>
 <div className="footer">
 
 <div className="block1">

<h4>Service</h4>
<p>Rent4U is committed to provide compassionate care and excellent service that transcends conventional drives.</p><br/>
Experience the freedom of travelling across Sri Lanka with the most affordable self-drive car rental options in the island. <br/>
Plan your trip with our flexible rental plans and hire vehicles either on a short-term or a long-term basis.
</div>


<div className="block3">

<h4>Contact us</h4>
<p>rent4u@gmail.com</p>
</div>

<div className="ways">
<a href="#"> <img src={Cont} width="60" height="30"/></a>
<a href="https://www.pinterest.com"> <img src={printerest} width="30" height="30"/></a>
<a href="https://myaccount.google.com"> <img src={Gle} width="30" height="30"/></a>
<a href="https://twitter.com"> <img src={Twt} width="30" height="30"/></a>
<a href="https://www.youtube.com/"><img src={Youtb} width="30" height="30"/></a>
<a href="https://www.facebook.com"> <img src={Facebk} width="30" height="30"/></a>
<a href="https://wwww.logging-in.com"><img src={In} width="30" height="30"/></a>
</div>


</div>

  </body>
    </div>
  )
}
  