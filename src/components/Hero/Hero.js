import React, { useEffect } from "react";
import home from "../../assets/hero-img.webp";
import "./Hero.css";
import { Loader } from "../Loader";
import { ChevronRight } from "lucide-react";
import { Link } from "react-scroll";

function Hero({ isLoading, setIsLoading }) {
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
      <section id="home" className={isLoading ? "hero-loader" : "hero"}>
        {isLoading ? (
          ""
        ) : (
          <div className="hero-content fade-in">
            <h1 className="hero-title">Secure Your Doors with Reliability</h1>
            <p className="hero-description">
              We are Cydel Iron Works, your trusted partner in roll up door
              services based in <span>Central Luzon, Philippines</span>. With a legacy of
              excellence and a commitment to quality, we turn your entrance
              doors with security.
            </p>
            <div>
              <p className="hero-description">Get a free quotation now!</p>
              <Link
                className="hero-btn"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button className="learn-btn">
                  Learn More <ChevronRight />
                </button>
              </Link>
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

export default Hero;
