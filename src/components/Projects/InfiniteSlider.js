import React from "react";
import "./InfiniteSlider.css";
import { images } from "../../constants/index";

function InfiniteSlider() {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide-track">
          {images.map((items, index) => (
            <div className="slide" key={index}>
              <img src={items.photo} alt="installed roll up doors"></img>
            </div>
          ))}

          {images.map((items, index) => (
            <div className="slide" key={index}>
              <img src={items.photo} alt="installed roll up doors"></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfiniteSlider;
