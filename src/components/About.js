import React, { useContext } from 'react';
import { aboutData } from '../data/about';
import { aboutData as aboutDataEs } from '../data/about-es';
import { LanguageContext } from '../utils/LanguageContext';

/**
 * Profile image component
 * Displays the main profile photo with styling
 */
const ProfileImage = () => {
  const { language } = useContext(LanguageContext);
  const currentData = language === 'es' ? aboutDataEs : aboutData;
  
  return (
    <div className="order-2 lg:order-1">
      <div className="w-full h-[30rem] rounded-lg overflow-hidden shadow-lg group cursor-pointer">
        <img
          src={currentData.profileImage}
          alt={currentData.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

/**
 * About content component
 * Contains the main text content about professional background
 */
const AboutContent = () => {
  const { language } = useContext(LanguageContext);
  const currentData = language === 'es' ? aboutDataEs : aboutData;
  
  return (
    <div className="order-1 lg:order-2">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        {currentData.title}
      </h2>
      
      <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
        {currentData.paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

/**
 * Main About Component
 * Professional introduction section with profile image and detailed background
 * Uses responsive grid layout for desktop/mobile optimization
 */
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ProfileImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default About;