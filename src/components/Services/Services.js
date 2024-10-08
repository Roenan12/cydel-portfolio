import React from "react";
import "./Services.css";
import TitleHeader from "../TitleHeader";
import CheckIcon from "../CheckIcon";
import { ApplicationShutter, Card, Shutters } from "./index";
import { cardContent, operation } from "../../data";
import { Fade } from "react-awesome-reveal";

function Services() {
  return (
    <>
      <div id="services">
        <TitleHeader
          title="Why Choose Cydel"
          description="At Cydel, our commitment to excellence, unparalleled expertise, and unwavering dedication set us apart. Here's why you should choose us:"
        />

        <section>
          <div className="card-container">
            {cardContent.map((item, index) => (
              <Fade
                cascade={false}
                delay={index * 200}
                direction="down"
                triggerOnce={true}
                key={index}
              >
                <div className="round-card">
                  <div>
                    <CheckIcon />
                  </div>
                  <h3 className="card-heading">{item.heading}</h3>
                  <p className="card-description">{item.content}</p>
                </div>
              </Fade>
            ))}
          </div>
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

        <TitleHeader
          title="Operation Type"
          description="Select the best operation that fits your roll up door:"
        />
        <section>
          <div className="operation-container">
            {operation.map((operation, index) => (
              <Fade
                cascade={false}
                delay={index * 500}
                direction="left"
                triggerOnce={true}
                key={index}
              >
                <div className="operation">
                  <h3>{operation.type}</h3>
                  <p>{operation.description}</p>
                </div>
              </Fade>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
