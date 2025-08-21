// components/Header.js
import React, { useState, useEffect } from "react";

/**
 * Slide navigation dots component
 * Allows users to manually navigate between slides
 * @param {Array} slides - Array of slide images
 * @param {Number} currentSlide - Index of currently active slide
 * @param {Function} onSlideChange - Function to change active slide
 */
const SlideDots = ({ slides, currentSlide, onSlideChange }) => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="flex space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
);

/**
 * Typewriter text component
 * @param {String} text - Current text being displayed
 */
const TypewriterText = ({ text }) => (
  <p className="text-2xl md:text-3xl font-light min-h-[40px]">
    {text}
    <span className="animate-pulse">|</span>
  </p>
);

/**
 * Hero content component
 * Main text content overlaid on the slideshow
 */
const HeroContent = ({ displayText }) => (
  <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
    <div>
      <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
        LUIS OJEDA
      </h1>
      <TypewriterText text={displayText} />
    </div>
  </div>
);

/**
 * Background slideshow component
 * Manages the rotating background images with smooth transitions
 * @param {Array} slides - Array of background image URLs
 * @param {Number} currentSlide - Index of currently active slide
 */
const BackgroundSlideshow = ({ slides, currentSlide }) => (
  <div className="absolute inset-0">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={slide}
          alt={`Background slide ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
);

/**
 * Main Header Component
 * Full-screen hero section with slideshow, typewriter effect, and navigation
 * Automatically cycles through slides and job titles every 4 seconds
 */
const Header = () => {
  // State for current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  // State for typewriter text display
  const [displayText, setDisplayText] = useState("");

  // Background images for slideshow
  const slides = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=800&fit=crop",
  ];

  /**
   * Auto-advance slideshow effect - Changes slide every4 seconds
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  /**
   * Typewriter effect for job titles
   */
  useEffect(() => {
    // Job titles for typewriter effect
    const roles = [
      "Full stack developer",
      "Web developer",
      "Systems consultant",
    ];

    let currentRole = roles[currentSlide];
    let index = 0;
    setDisplayText("");

    const typeInterval = setInterval(() => {
      if (index <= currentRole.length) {
        setDisplayText(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 90);

    return () => clearInterval(typeInterval);
  }, [currentSlide]);

  /**
   * Manual slide change handler
   * Allows users to click dots to change slides
   * @param {Number} slideIndex - Index of slide to display
   */
  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    // Full-screen header section
    <header className="relative h-screen overflow-hidden">
      {/* Background slideshow with images */}
      <BackgroundSlideshow slides={slides} currentSlide={currentSlide} />

      {/* Main hero content (name and job title) */}
      <HeroContent displayText={displayText} />

      {/* Navigation dots for manual slide control */}
      <SlideDots
        slides={slides}
        currentSlide={currentSlide}
        onSlideChange={handleSlideChange}
      />
    </header>
  );
};

export default Header;
