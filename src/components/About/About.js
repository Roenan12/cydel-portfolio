import "./About.css";
import { TitleHeader } from "../TitleHeader";
import { aboutStats, aboutLegacy } from "../../constants";
import { ReactComponent as CheckmarkIcon } from "../../assets/checkmark.svg";

export function About() {
  return (
    <div className="about-section">
      <TitleHeader
        title="Our Legacy of Excellence"
        description="Established 2008, Cydel has been a leading force in the iron works industry, specializing in roll up doors services. Our commitment to quality and innovation sets us apart"
        id="about"
      />
      <section>
        <div className="stats-container">
          {aboutStats.map((item, index) => (
            <div className="stats-item" key={index}>
              <h1>{item.data}</h1>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        <div className="round-container">
          {aboutLegacy.map((item, index) => (
            <div className="round-item" key={index}>
              <CheckmarkIcon className="icon" />
              {item.content}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
