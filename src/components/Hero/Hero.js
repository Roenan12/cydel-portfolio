import React, { useEffect } from "react";
import garage from "../../assets/3-done.jpg";
import "./Hero.css";
import { Loader } from "../Loader";

export function Hero({ isLoading, setIsLoading }) {
  useEffect(() => {
    const img = new Image();
    img.src = garage;
    if (img.complete) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      img.onload = () => setIsLoading(false);
    }
  }, [setIsLoading]);

  return (
    <>
      <section id="home" className="hero">
        {isLoading ? (
          ""
        ) : (
          <div className="hero-content">
            <h2>Cydel Iron Works</h2>
            <p>Your Roll up Door Specialist</p>

            <a className="hero-btn" href="#contact">
              Inquire Now
            </a>
          </div>
        )}
        {isLoading ? (
          <Loader size={100} />
        ) : (
          <img
            className="hero-img kenburns-top"
            src={garage}
            alt="hero roll up door"
          />
        )}
        <div className="hero-overlay"></div>
      </section>
    </>
  );
}
