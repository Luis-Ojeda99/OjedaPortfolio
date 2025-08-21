// components/About.js
import React from "react";

/**
 * Profile image component
 * Displays the main profile photo with styling
 */
const ProfileImage = () => (
  <div className="order-2 lg:order-1">
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <img
        src="/img/about.webp"
        alt="Luis Ojeda"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

/**
 * About content component
 * Contains the main text content about Luis Ojeda
 */
const AboutContent = () => (
  <div className="order-1 lg:order-2">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      My name is Luis Ojeda
    </h2>

    <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
      <p>
        Greetings! I'm a dedicated Software Development graduate with honors
        from the Southern Alberta Institute of Technology (SAIT), based in
        Calgary, Canada. Experienced in utilizing various programming languages
        and frameworks as a full stack developer working on the design,
        implementation, and maintenance of applications across diverse
        platforms.
      </p>

      <p>
        Possessing this expertise, I offer a well-rounded skill set. My
        capabilities extend beyond coding, excelling in business analysis and
        employing strong problem-solving skills for efficient debugging. I've
        adeptly maneuvered through collaborative team settings, ensuring smooth
        client communication and fostering teamwork.
      </p>

      <p>
        Adept at writing technical and user documentation. My bilingual
        proficiency in English and Spanish enhances my ability to communicate
        effectively in multicultural settings. Currently serve as a Systems
        Consultant at Long View Systems, where I continue to contribute my
        skills and knowledge to the field.
      </p>
    </div>
  </div>
);

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