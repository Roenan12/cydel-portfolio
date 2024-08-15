import React from "react";
import "./Projects.css";
import { TitleHeader } from "../TitleHeader";
import { images } from "../../constants/index";

export function Projects() {
  return (
    <>
      <div id="projects">
        <TitleHeader
          title="Our Remarkable Project Portfolio"
          description=" Explore our extensive portfolio showcasing the breadth of our expertise,
        from iconic shutter doors to sustainable solutions, all meticulously
        crafted to perfection"
        />

        <section className="portfolio-container">
          <div className="slider-container">
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
          </div>
        </section>
      </div>
    </>
  );
}
