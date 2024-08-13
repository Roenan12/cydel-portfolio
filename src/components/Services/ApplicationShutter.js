import "./ApplicationShutter.css";
import { applicationTypes } from "../../constants/index.js";

export function ApplicationShutter() {
  return (
    <>
      <div className="grid-container">
        {applicationTypes.map((item, index) => (
          <div key={index} className="grid-item">
            <div className="filled-icon">{item.icon}</div>

            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
