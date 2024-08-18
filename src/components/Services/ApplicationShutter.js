import React from "react";
import "./ApplicationShutter.css";
import { applicationTypes } from "../../constants";
import { Fade } from "react-awesome-reveal";

function ApplicationShutter() {
  return (
    <>
      <Fade triggerOnce={true} duration={1500}>
        <div className="grid-container">
          {applicationTypes.map((item, index) => (
            <div key={index} className="grid-item">
              <div className="filled-icon">{item.icon}</div>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </Fade>
    </>
  );
}

export default ApplicationShutter;
