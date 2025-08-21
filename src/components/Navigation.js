// components/Navigation.js
import React, { useState } from 'react';
import { navItems, logoText } from '../data/navigation';

/**
 * Logo component for the navigation bar
 * Displays the portfolio brand name
 */
const NavLogo = () => (
  <div className="flex-shrink-0">
    <span className="text-xl font-bold text-gray-800">{logoText}</span>
  </div>
);

/**
 * Reusable navigation items component
 * @param {Array} items - Navigation menu items
 * @param {Function} onItemClick - Click handler for navigation items
 * @param {String} className - Additional CSS classes for styling
 */
const NavItems = ({ items, onItemClick, className = "" }) => (
  <div className={className}>
    {items.map((item) => (
      <button
        key={item.href}
        onClick={() => onItemClick(item.href)}
        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
      >
        {item.label}
      </button>
    ))}
  </div>
);

/**
 * Mobile hamburger menu button
 * Toggles between hamburger and X icon based on menu state
 * @param {Boolean} isOpen - Current state of mobile menu
 * @param {Function} onToggle - Function to toggle menu state
 */
const MobileMenuButton = ({ isOpen, onToggle }) => (
  <button onClick={onToggle} className="text-gray-700 hover:text-blue-600 md:hidden">
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
    </svg>
  </button>
);

/**
 * Main Navigation Component
 * Fixed navigation bar with responsive design
 * Includes desktop horizontal menu and mobile hamburger menu
 */
const Navigation = () => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Handles navigation item clicks
   * Closes mobile menu and smoothly scrolls to target section
   * @param {String} href - Target section ID
   */
  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Fixed navigation bar with backdrop blur effect
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main navigation header */}
        <div className="flex justify-between items-center h-16">
          <NavLogo />
          
          {/* Desktop navigation menu */}
          <NavItems 
            items={navItems} 
            onItemClick={handleNavClick}
            className="hidden md:flex ml-10 items-baseline space-x-8"
          />
          
          {/* Mobile menu toggle button */}
          <MobileMenuButton 
            isOpen={isMenuOpen} 
            onToggle={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </div>
        
        {/* Mobile navigation menu (shown when hamburger is clicked) */}
        {isMenuOpen && (
          <div className="md:hidden">
            <NavItems 
              items={navItems} 
              onItemClick={handleNavClick}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white flex flex-col"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;