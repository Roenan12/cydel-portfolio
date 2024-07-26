import "./Services.css";
import { Card } from "./Card.js";

export function Services({ theme, onsetTheme }) {
  return (
    <>
      <h1 className="services">What We Offer</h1>
      <section className="card-container" id="services">
        <Card />
      </section>
    </>
  );
}
