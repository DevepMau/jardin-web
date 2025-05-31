import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

// Importa tus imágenes
import img1 from '../assets/imageSlider/img1.jpg';
import img2 from '../assets/imageSlider/img2.jpg';
import img3 from '../assets/imageSlider/img3.jpg';
import img4 from '../assets/imageSlider/img4.jpg';

const images = [img1, img2, img3, img4];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Iniciar carrusel automático
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToPrevious = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    startAutoSlide();
  };

  const goToNext = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    startAutoSlide();
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} className="slide-image" />
        ))}
      </div>

      {/* Botones de navegación */}
      <button className="nav-button prev" onClick={goToPrevious}>‹</button>
      <button className="nav-button next" onClick={goToNext}>›</button>
    </div>
  );
}

export default ImageSlider;