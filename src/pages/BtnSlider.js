import React from "react";
import "./Slider.css";
import leftarrow from "../images/leftarrow.png";
import rightarrow from "../images/rightarrow.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightarrow : leftarrow} />
    </button>
  );
}