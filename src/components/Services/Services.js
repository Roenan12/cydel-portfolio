import "./Services.css";
import { Card } from "./Card.js";

export function Services({ theme, onsetTheme }) {
  return (
    <div>
      <h1 className="services">What We Offer</h1>
      <section id="services">
        <Card />
      </section>
    </div>
  );
}
