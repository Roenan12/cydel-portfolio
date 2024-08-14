import "./Services.css";
import { TitleHeader } from "../TitleHeader";
import { Card } from "./Card.js";
import { ReactComponent as CheckmarkIcon } from "../../assets/checkmark.svg";
import { cardContent } from "../../constants/index.js";
import { Shutters } from "./Shutters.js";
import { ApplicationShutter } from "./ApplicationShutter.js";

export function Services() {
  return (
    <>
      <TitleHeader
        title="Why Choose Cydel"
        description="At Cydel, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here's why you should choose us:"
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
        title="Tailored Fabrication Solutions"
        description="At Cydel, we offer a comprehensive suite of roll up door services, meticulously tailored to match your unique establishments, ensuring success at every step."
      />
      <section>
        <div className="card-container">
          <Card />
        </div>
      </section>

      <TitleHeader
        title="Application of our shutters"
        description="Our shutter doors are commonly used but not limited to:"
      />
      <section className="application-container">
        <ApplicationShutter />
      </section>

      <TitleHeader
        title="Our Shutters"
        description="Elevate your entrance with our custom shutters, crafted from a variety of premium materials to suit your unique preferences:"
      />
      <section>
        <Shutters />
      </section>
    </>
  );
}
