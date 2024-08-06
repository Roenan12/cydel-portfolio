import "./Services.css";
import { TitleHeader } from "../TitleHeader";
import { Card } from "./Card.js";

export function Services({ theme, onsetTheme }) {
  return (
    <>
      <TitleHeader
        title="What We Offer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        id="services"
      />
      <section>
        <div className="card-container">
          <Card />
        </div>
      </section>
      <TitleHeader
        title="Why Choose Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        id="services"
      />
    </>
  );
}
