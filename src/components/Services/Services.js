import "./Services.css";
import { Card } from "./Card.js";

export function Services({ theme, onsetTheme }) {
  return (
    <>
      <h1 className="services" id="services">
        What We Offer
      </h1>
      <section className="card-container">
        <Card />
      </section>
    </>
  );
}
