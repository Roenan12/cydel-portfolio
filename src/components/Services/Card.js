import "./Card.css";
import { services } from "../../constants";
import { Fade } from "react-awesome-reveal";

export function Card() {
  return (
    <>
      {services.map((item, index) => (
        <Fade
          cascade={false}
          delay={index * 500}
          direction="up"
          triggerOnce={true}
        >
          <div className="card" key={index}>
            <div className="card-icon">{item.icon}</div>
            <div className="card-heading">{item.heading}</div>
            <p className="card-description">{item.description}</p>
          </div>
        </Fade>
      ))}
    </>
  );
}
