import React, { useState } from 'react';
import styled from "styled-components";
import '../styles/aboutus.css';
import AboutUsImg from '../images/aboutus.jpg';


function AboutUs(){
    return <div>
       
        <body className="bodyp">

       
    <style type="text/css" >
        { `.navlink {display:none}` }
    </style>
    <style type="text/css" >
        { `.navbar {display:none}` }
    </style>
    <style type="text/css" >
        { `.navbar1 {display:none}` }
    </style>
    <style type="text/css" >
    { `.main-container {display:none}` }
</style>
<style type="text/css" >
    { `.sidebar {display:none}` }
</style>
<style type="text/css" >
    { `.top_section {display:none}` }
</style>

    
    
    <MainContainer1>
    </MainContainer1>


    <MainContainer2>
        <WelcomeText>About Us</WelcomeText>
        <br></br>
        <div className='para1'>
            <p>WELCOME RENT4U CAR RENTAL SYSTEM</p>
        </div>
    
        <div className='para2'>
            <p>PREMIER CAR RENTAL SERVICES IN SRI LANKA With over 30 years of experience in the industry, we strive to offer the highest levels of customer service and a highly
                personalised service to all our customers who are on the lookout for Sri Lanka car rental opportunities. With one of the 
                largest and most modern and varied fleets in Sri Lanka, our service is backed by a networked front office, fully-fledged
                mechanical servicing and valet servicing onsite
            </p>
        </div>

        <br></br>
        <br></br>
        <div className='para3'>
            <h6>Contact us: </h6>
            <h6>Rent4U@gmail.com</h6>
            <h6>+94716852963</h6>
            <h6>+94776223443</h6>
            
        
        </div>
    </MainContainer2>
    ;

    
    </body>
      </div>;
}
      





const MainContainer1 = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 80vh;
width: 20vw;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(7px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 10px;
text-transform: uppercase;
letter-spacing: 0.3rem;

margin: 20px;
background-image: url(${AboutUsImg});
background-size:cover;
background-position: center;
background-repeat:no-repeat;



`;


const MainContainer2 = styled.div`
display: flex;
align-items: right;
flex-direction: column;
height: 80vh;
width: 50vw;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(7px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 10px;






`;

const WelcomeText = styled.h2`
margin: 3rem 0 2rem 0;
font-style: Verdana;
align-items: center;
margin-left: 50px;
font-weight: bold;
color: #fed700 ;;

`;











export default AboutUs;