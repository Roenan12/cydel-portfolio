import React from "react";
import "./TitleHeader.css";
import { Fade } from "react-awesome-reveal";

function TitleHeader({ title, description, id }) {
  return (
    <Fade triggerOnce={true} duration={2000}>
      <div className="header-section">
        <h1 className="header-title" id={id}>
          {title}
        </h1>
        <p className="header-description">{description}</p>
      </div>
    </Fade>
  );
}

export default TitleHeader;
