// components/Contact.js
import React from "react";
import { contactData } from "../data/contact";

/**
 * Social links component
 * Displays social media 
 */
const SocialLinks = () => (
  <div className="flex space-x-6">
    {contactData.socialLinks.map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-200 transition-colors p-3"
        aria-label={social.label}
      >
        <svg
          className="w-8 h-8"
          fill={social.isStroke ? "none" : "currentColor"}
          stroke={social.isStroke ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          dangerouslySetInnerHTML={{ __html: social.svg }}
        />
      </a>
    ))}
  </div>
);

/**
 * Main call-to-action button component
 */
const ContactButton = () => (
  <a
    href={`mailto:${contactData.email}`}
    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
  >
    Let's Have a Conversation
  </a>
);

/**
 * Contact information component
 * Displays location and availability status
 */
const ContactInfo = () => (
  <div className="mt-12 text-sm opacity-75">
    <p>
      Based in {contactData.location.city}, {contactData.location.province},{" "}
      {contactData.location.country}
    </p>
    <p>{contactData.availability}</p>
  </div>
);

/**
 * Main Contact Component
 * Call-to-action section with social links and contact information
 */
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-600 to-purple-700"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-white">
          {/* Main heading */}
          <p className="text-xl mb-4 opacity-90">{contactData.subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {contactData.title}
          </h2>

          {/* Contact actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <ContactButton />
            <SocialLinks />
          </div>

          {/* Additional contact info */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
