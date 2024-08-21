import React, { useState } from "react";
import "./Shutters.css";
import { shutterTypes } from "../../constants";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Shutters() {
  const [selectedShutter, setSelectedShutter] = useState(shutterTypes[0]); // Default to Galvalume

  const handleShutterChange = (shutter) => {
    setSelectedShutter(shutter);
  };

  return (
    <Fade triggerOnce={true}>
      <div className="shutter-container">
        <div className="shutter-column">
          <div className="img-container">
            <LazyLoadImage
              src={selectedShutter.image}
              alt={selectedShutter.title}
            />
          </div>

          <div className="inner-grid-btn">
            {shutterTypes.slice(0, 4).map((shutter, index) => (
              <div className="btn-container" key={index}>
                <button
                  className={`shutter-btn ${
                    selectedShutter.title === shutter.title ? "selected" : ""
                  }`}
                  onClick={() => handleShutterChange(shutter)}
                >
                  {shutter.title}
                </button>
              </div>
            ))}
            <div className="full-width btn-container">
              <button
                className={`shutter-btn ${
                  selectedShutter.title === shutterTypes[4].title
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleShutterChange(shutterTypes[4])}
              >
                {shutterTypes[4].title}
              </button>
            </div>
          </div>
        </div>

        <div className="content-column">
          <h1>{selectedShutter.title}</h1>
          <p>{selectedShutter.details}</p>
          <h3>Slat</h3>
          <p>{selectedShutter.slat.join(", ")}</p>
          <h3>Size</h3>
          <p>{selectedShutter.size}</p>
          <h3>Accessories (Optional)</h3>
          <p>{selectedShutter.optionalAccesories.join(", ")}</p>
          <h3>Application</h3>
          <p>{selectedShutter.application}</p>
        </div>
      </div>
    </Fade>
  );
}

export default Shutters;
