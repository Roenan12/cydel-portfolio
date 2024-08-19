import React from "react";
import "./Projects.css";
import TitleHeader from "../TitleHeader";
import InfiniteSlider from "./InfiniteSlider";

function Projects() {
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
          <InfiniteSlider />
        </section>
      </div>
    </>
  );
}

export default Projects;
