import React, { useState } from "react";
import { navgitationData, logoText } from "../data/navigation";

const NavLogo = () => (
  <div className="flex-shrink-0">
    <span className="text-xl font-bold text-gray-800">{logoText}</span>
  </div>
);

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

const MobileMenuButton = ({ isOpen, onToggle }) => (
  <button
    onClick={onToggle}
    className="text-gray-700 hover:text-blue-600 md:hidden"
  >
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
      />
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

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Fixed navigation bar with backdrop blur effect
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navigation header */}
        <div className="flex justify-between items-center h-16">
          {/* Logo + Nav Items */}
          <div className="flex items-center">
            <NavLogo />
            <NavItems
              items={navgitationData}
              onItemClick={handleNavClick}
              className="hidden md:flex ml-10 space-x-8"
            />
          </div>

          {/* Language + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language toggle button */}
            <button className="hidden md:block text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              ES
            </button>

            {/* Mobile menu toggle button */}
            <MobileMenuButton
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile navigation menu (shown when hamburger is clicked) */}
        {isMenuOpen && (
          <div className="md:hidden">
            <NavItems
              items={navgitationData}
              onItemClick={handleNavClick}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white flex flex-col"
            />
            
            {/* Language toggle in mobile menu */}
            <div className="px-2 pb-3">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium w-full text-left">
                ES
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;