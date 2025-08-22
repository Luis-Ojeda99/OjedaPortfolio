// components/Footer.js
import React from 'react';
import { footerData } from '../data/footer';

/**
 * Footer social links component
 * Simple text-based social links for the footer
 */
const FooterSocialLinks = () => (
  <div className="mt-4 flex justify-center space-x-6">
    {footerData.socialLinks.map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        {social.label}
      </a>
    ))}
  </div>
);

/**
 * Copyright component
 * Displays copyright notice with current year
 */
const Copyright = () => (
  <p className="text-gray-400">
    &copy; Copyright {footerData.copyright.name} {footerData.copyright.year}. All rights reserved.
  </p>
);

/**
 * Main Footer Component
 * Simple footer with copyright and social links
 */
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Copyright />
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;