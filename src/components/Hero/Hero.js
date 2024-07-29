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
          <Loader />
        ) : (
          <img
            className="hero-img kenburns-top"
            src={garage}
            alt="hero roll up door"
          />
        )}
        <div className="hero-overlay"></div>
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
