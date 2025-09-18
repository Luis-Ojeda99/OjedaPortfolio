// components/Header.js
import React, { useState, useEffect, useContext } from "react";
import { heroData, heroConfig } from "../data/hero";
import {
  heroData as heroDataEs,
  heroConfig as heroConfigEs,
} from "../data/hero-es";
import { LanguageContext } from "../utils/LanguageContext";

/**
 * Slide navigation dots component
 * Allows users to manually navigate between slides
 */
const SlideDots = ({ slides, currentSlide, onSlideChange }) => {
  return (
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
};

/**
 * Typewriter text component
 * Displays animated typing effect for job titles
 */
const TypewriterText = ({ displayText }) => (
  <p className="text-2xl md:text-3xl font-light min-h-[40px]">
    {displayText}
    <span className="animate-pulse">|</span>
  </p>
);

/**
 * Hero content component
 * Main text content overlaid on the slideshow
 */
const HeroContent = ({ displayText }) => {
  const { language } = useContext(LanguageContext);
  const currentData = language === "es" ? heroDataEs : heroData;

  return (
    <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
      <div>
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
          {currentData.name}
        </h1>
        <TypewriterText displayText={displayText} />
      </div>
    </div>
  );
};

/**
 * Background slideshow component
 * Manages the rotating background images with smooth transitions
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
 */
const Header = () => {
  const { language } = useContext(LanguageContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Get current language data
  const currentData = language === "es" ? heroDataEs : heroData;
  const currentConfig = language === "es" ? heroConfigEs : heroConfig;

  /**
   * Auto-advance slideshow effect
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentData.slides.length);
    }, currentConfig.slideInterval);

    return () => clearInterval(interval);
  }, [currentData.slides.length, currentConfig.slideInterval]);

  /**
   * Typewriter effect for job titles
   */
  useEffect(() => {
    let currentRole = currentData.roles[currentSlide];
    let index = 0;
    setDisplayText("");

    const typeInterval = setInterval(() => {
      if (index <= currentRole.length) {
        setDisplayText(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, currentConfig.typewriterSpeed);

    return () => clearInterval(typeInterval);
  }, [currentSlide, currentData.roles, currentConfig.typewriterSpeed]);

  /**
   * Manual slide change handler
   */
  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <header className="relative h-screen overflow-hidden">
      <BackgroundSlideshow
        slides={currentData.slides}
        currentSlide={currentSlide}
      />
      <HeroContent displayText={displayText} />
      <SlideDots
        slides={currentData.slides}
        currentSlide={currentSlide}
        onSlideChange={handleSlideChange}
      />
    </header>
  );
};

export default Header;
