import React, { useState } from "react";
import "../styles/gallery.css";
import images from "./images";

function Gallary(){

    const[selectedimg, setSelectedImg] =useState(images[0]);

    return <div>

    <style type="text/css" >
        { `.main-container {display:none}` }
    </style>
    <style type="text/css" >
        { `.sidebar {display:none}` }
    </style>
    <style type="text/css" >
        { `.top_section {display:none}` }
    </style>

       
  
    <div className="bodyg">
        <div className="container">
        <h1 className="title">Brands Gallery</h1>
        <img src={selectedimg} alt="Selected" className="selected" />
            <div className="imgContainer">
                {images.map((img, index) => (
                    <img 
                    style={{border:selectedimg === img ? "4px solid purple " : "" }} 
                    key={index} 
                    src={img} 
                    alt="car" 
                    onClick={() => setSelectedImg(img)}
                    />
                ))}
            </div>   
            </div>    
        </div>      
    </div>;
    }



export default Gallary;