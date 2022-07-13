import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import car1 from '../images/car1.png';
import car2 from '../images/car2.png';
import car3x from '../images/car3x.png';
import car4 from '../images/car4.png';
import service from '../images/service.png';
import Slider from "./Slider";
import dcar from '../images/dcar.jpg';


import Cont from "../images/cont.png";
import printerest from "../images/printerest.png";
import Gle from "../images/gle.png";
import Twt from "../images/Twt.png";
import Youtb from "../images/Youtb.png";
import Facebk from "../images/faceb.png";
import In from "../images/in.png";





class Homepage extends React.Component {
  render() {
    return (
      <div>
        <style type="text/css" >
    { `.main-container {display:none}` }
</style>
<style type="text/css" >
    { `.sidebar {display:none}` }
</style>
<style type="text/css" >
    { `.top_section {display:none}` }
</style>

                  
        <div>
          <head>
            <title>Rent4U Car Rental System</title>
          </head>
        </div>
        <body className="bodya">
          <br/><br/>
          <h1 className="heading">Your Trusted Car Rental Provider for your Upcoming Drives</h1>
          <br/>    <Slider/>
          
         
           <br/>
    <table >
      <tr>
        <th>   
<h2><b>WELCOME TO RENT4U</b></h2><br/>
<h3><b> PREMIER CAR RENTAL SERVICES <br/> IN SRI LANKA </b></h3>
<p> With over 30 years of experience in the industry, we strive to offer the highest
 levels of customer service <br/>
 and a highly personalised service to all our customers who are on 
 the lookout for Sri Lanka car rental opportunities,<br/>
  With one of the largest and most  modern and varied fleets in Sri Lanka, our service is backed by a networked front office,<br/>
 fully-fledged mechanical servicing and valet servicing onsite.</p> 
 <Link to="/details">    <br/>   <button className="details">More details</button></Link> 
 </th> <th><img src={car1} /></th>
 </tr>
 </table>  
 <br/><br/><br/>

          
          <div className="f1">
            <div >
          <img src={service} />
          <Link to=""> <img src={car3x} className="ki"/></Link>
          <Link to=""><img src={car4} className="ki"/></Link>
          <Link to=""><img src={car2} className="ki"/></Link>

        </div>   </div> <br/><br/><br/><br/><br/>
 <h2 className="head3"> DISCOVER SOME CARS</h2><br/>
<Link to=""><button className="dcar"><img src={dcar} className="dcar" /></button></Link>




       <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>  </body>

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



      </div>

    );
  }
}

export default Homepage;