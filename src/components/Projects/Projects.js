import React from "react";
import "./Projects.css";
import { images } from "../../constants/index";

export function Projects() {
  return (
    <>
      <h1 className="project-header">Some of our Projects</h1>
      <section id="projects" className="slider-container">
        <div className="slider">
          <div className="slide-track">
            {images.map((items, index) => (
              <div className="slide" key={index}>
                <img src={items.photo} alt="installed roll up doors"></img>
              </div>
            ))}

            {images.map((items, index) => (
              <div className="slide" key={index}>
                <img src={items.photo} alt="installed roll up doors"></img>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
