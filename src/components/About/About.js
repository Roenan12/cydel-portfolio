import "./About.css";
import { TitleHeader } from "../TitleHeader";
import { aboutStats, aboutLegacy } from "../../constants";
import { ReactComponent as CheckmarkIcon } from "../../assets/checkmark.svg";
import { useSpring, animated } from "react-spring";
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";

export function About() {
  function Number({ n }) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const node = ref.current; // current ref value
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true); // Ensure animation is triggered only once
          }
        },
        { threshold: 0.1 }
      );

      if (node) {
        observer.observe(node);
      }

      return () => {
        if (node) {
          observer.unobserve(node);
        }
      };
    }, [hasAnimated]);

    const { number } = useSpring({
      from: { number: 0 },
      number: isVisible ? n : 0, // Animate only when visible
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return (
      <animated.div ref={ref}>{number.to((n) => n.toFixed(0))}</animated.div>
    );
  }

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
              <h1>
                <Number n={item.data} />
                {item.symbol}
              </h1>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        <div className="round-container">
          {aboutLegacy.map((item, index) => (
            <Fade
              cascade={false}
              delay={index * 500}
              direction="down"
              triggerOnce={true}
            >
              <div className="round-item" key={index}>
                <CheckmarkIcon className="check-icon" />
                {item.content}
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
}
