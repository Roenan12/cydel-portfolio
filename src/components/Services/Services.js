import "./Services.css";
import { TitleHeader } from "../TitleHeader";
import { Card } from "./Card.js";
import { ReactComponent as CheckmarkIcon } from "../../assets/checkmark.svg";
import { applicationTypes, cardContent } from "../../constants/index.js";

export function Services() {
  return (
    <>
      <TitleHeader
        title="Why Choose Us"
        description="At Cydel Roll Up Doors, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here's why you should choose us:"
        id="services"
      />
      <section className="card-container">
        {cardContent.map((item, index) => (
          <div
            style={{ backgroundColor: item.background }}
            className="round-card"
            key={index}
          >
            <div>
              <CheckmarkIcon className="check-icon" />
            </div>
            <h3 className="card-heading">{item.heading}</h3>
            <p className="card-description">{item.content}</p>
          </div>
        ))}
      </section>
      <TitleHeader
        title="What We Offer"
        description="At Cydel, we offer a comprehensive suite of roll up door services, meticulously tailored to match your unique establishments, ensuring success at every step."
      />
      <section>
        <div className="card-container">
          <Card />
        </div>
      </section>

      <TitleHeader
        title="Application of our shutters"
        description="At Cydel, our shutter doors are commonly used but not limited to:"
      />
      <section className="application-container">
        <div className="grid-container">
          {applicationTypes.map((item, index) => (
            <div key={index} className="grid-item">
              <div className="filled-icon">{item.icon}</div>

              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
