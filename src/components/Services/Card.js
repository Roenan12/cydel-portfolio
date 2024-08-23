import React from "react";
import "./Card.css";
import { services } from "../../data";
import { Fade } from "react-awesome-reveal";

function Card() {
  return (
    <>
      {services.map((item, index) => (
        <Fade
          cascade={false}
          delay={index * 500}
          direction="up"
          triggerOnce={true}
          key={index}
        >
          <div className="card">
            <div className="card-icon">{item.icon}</div>
            <div className="card-heading">{item.heading}</div>
            <p className="card-description">{item.description}</p>
          </div>
        </Fade>
      ))}
    </>
  );
}

export default Card;
