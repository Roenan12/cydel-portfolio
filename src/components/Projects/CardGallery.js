import React, { useState, useEffect } from "react";
import { projectImages } from "../../constants";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./CardGallery.css";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CardGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cardsPerSlide, setCardsPerSlide] = useState(6);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      const screenWidth = window.innerWidth;
      const mediumScreen = 75 * 16; // 75rem
      const smallScreen = 50 * 16; // 50rem

      if (screenWidth <= smallScreen) {
        setCardsPerSlide(2);
      } else if (screenWidth <= mediumScreen) {
        setCardsPerSlide(4);
      } else {
        setCardsPerSlide(6);
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(projectImages.length / cardsPerSlide);

  function handleNextSlide() {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function goToPreviousSlide() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function openModal(imageUrl) {
    setSelectedImage(imageUrl);
  }

  function closeModal() {
    setSelectedImage(null);
  }

  const slideStart = currentSlide * cardsPerSlide;
  const slideEnd = slideStart + cardsPerSlide;
  const currentCards = projectImages.slice(slideStart, slideEnd);

  return (
    <>
      <div className="gallery-container">
        <button onClick={goToPreviousSlide} disabled={currentSlide === 0}>
          <ChevronLeft />
        </button>
        <div className="gallery-card-container">
          {currentCards.map((card) => (
            <Fade cascade={false} triggerOnce={true} key={card.id}>
              <div className="gallery-card">
                <div className="card-img-container">
                  <LazyLoadImage
                    effect="blur"
                    src={card.image}
                    alt={card.title}
                    className="card-image"
                    onClick={() => openModal(card.image)}
                  />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </Fade>
          ))}
        </div>
        <button
          onClick={handleNextSlide}
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronRight />
        </button>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">
            <X size="30" />
          </span>
          <img
            className="modal-content"
            src={selectedImage}
            alt="Enlarged view"
          />
        </div>
      )}
    </>
  );
}

export default CardGallery;
