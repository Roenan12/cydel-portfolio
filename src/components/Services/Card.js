import "./Card.css";
import { Warehouse } from "lucide-react";
import { Wrench } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { services } from "../../constants";

export function Card() {
  return (
    <>
      {services.map((item, index) => (
        <div class="card" key={index}>
          <div className="card-icon">{item.icon}</div>
          <div className="card-heading">{item.heading}</div>
          <p className="card-description">{item.description}</p>
        </div>
      ))}
    </>
  );
}
