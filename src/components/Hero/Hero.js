import React, { useEffect } from "react";
import home from "../../assets/home.png";
import "./Hero.css";
import { Loader } from "../Loader";
import { ChevronRight } from "lucide-react";

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
          <div className="hero-content">
            <h2>Secure Your Doors with Reliability</h2>
            <h3>
              We are Cydel Iron Works, your trusted partner in roll up door
              services. With a legacy of excellence and a commitment to quality,
              we turn your doors with security.
            </h3>
            <div>
              <p>Get a free quotation now!</p>
              <a className="hero-btn" href="#contact">
                <button class="learn-btn">
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
