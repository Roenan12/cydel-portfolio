import React from "react";
import "./InfiniteSlider.css";
import { images } from "../../constants/index";
import { LazyLoadImage } from "react-lazy-load-image-component";

function InfiniteSlider() {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide-track">
          {images.map((items, index) => (
            <div className="slide" key={index}>
              <LazyLoadImage src={items.photo} alt="installed roll up doors" />
            </div>
          ))}

          {images.map((items, index) => (
            <div className="slide" key={index}>
              <LazyLoadImage src={items.photo} alt="installed roll up doors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfiniteSlider;
