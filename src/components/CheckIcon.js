import React from "react";
import "./CheckIcon.css";
import { Check } from "lucide-react";

function CheckIcon({ size = 30 }) {
  return (
    <div
      className="check-icon"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Check color="white" />
    </div>
  );
}

export default CheckIcon;
