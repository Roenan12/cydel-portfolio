import React, { useEffect } from "react";
import home from "../../assets/home.png";
import "./Hero.css";
import { Loader } from "../Loader";
import { ChevronRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export function Hero({ isLoading, setIsLoading }) {
  useEffect(() => {
    const img = new Image();
    img.src = home;
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
          <div className="hero-content fade-in">
            <h1 className="hero-title">Secure Your Doors with Reliability</h1>
            <p className="hero-description">
              We are Cydel Iron Works, your trusted partner in roll up door
              services. With a legacy of excellence and a commitment to quality,
              we turn your doors with security.
            </p>
            <div>
              <p className="hero-description">Get a free quotation now!</p>
              <a className="hero-btn" href="#contact">
                <button className="learn-btn">
                  Learn More <ChevronRight />
                </button>
              </a>
            </div>
          </div>
        )}
        {isLoading ? (
          <Loader size={100} />
        ) : (
          <img
            className="hero-img fade-in"
            src={home}
            alt="hero roll up door"
          />
        )}
      </section>
    </>
  );
}
