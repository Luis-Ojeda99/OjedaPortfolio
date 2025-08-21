// components/Header.js
import React, { useState, useEffect } from 'react';
import { heroData, heroConfig } from '../data/hero';

/**
 * Slide navigation dots component
 * Allows users to manually navigate between slides
 */
const SlideDots = ({ slides, currentSlide, onSlideChange }) => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="flex space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
);

/**
 * Typewriter text component
 * Displays animated typing effect for job titles
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
        {heroData.name}
      </h1>
      <TypewriterText text={displayText} />
    </div>
  </div>
);

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
          index === currentSlide ? 'opacity-100' : 'opacity-0'
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  /**
   * Auto-advance slideshow effect
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.slides.length);
    }, heroConfig.slideInterval);
    
    return () => clearInterval(interval);
  }, []);
  
  /**
   * Typewriter effect for job titles
   */
  useEffect(() => {
    let currentRole = heroData.roles[currentSlide];
    let index = 0;
    setDisplayText('');
    
    const typeInterval = setInterval(() => {
      if (index <= currentRole.length) {
        setDisplayText(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, heroConfig.typewriterSpeed);
    
    return () => clearInterval(typeInterval);
  }, [currentSlide]);

  /**
   * Manual slide change handler
   */
  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <header className="relative h-screen overflow-hidden">
      <BackgroundSlideshow slides={heroData.slides} currentSlide={currentSlide} />
      <HeroContent displayText={displayText} />
      <SlideDots 
        slides={heroData.slides} 
        currentSlide={currentSlide} 
        onSlideChange={handleSlideChange} 
      />
    </header>
  );
};

export default Header;