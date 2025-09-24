import React, { useState, useContext, useEffect } from "react";
import { navgitationData, logoText } from "../data/navigation";
import {
  navgitationData as navigationDataEs,
  logoText as logoTextEs,
} from "../data/navigation-es";
import { LanguageContext } from "../utils/LanguageContext";

const NavLogo = ({ logoText }) => (
  <div className="flex-shrink-0">
    <span className="text-xl font-bold text-gray-800">{logoText}</span>
  </div>
);

const NavItems = ({ items, onItemClick, activeSection, className = "" }) => (
  <div className={className}>
    {items.map((item) => (
      <button
        key={item.href}
        onClick={() => onItemClick(item.href)}
        className={`px-3 py-2 text-sm font-medium transition-colors ${
          activeSection === item.href.substring(1)
            ? "text-blue-600 font-bold"
            : "text-gray-700 hover:text-blue-600"
        }`}
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
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "stats", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

      // If at bottom, assume contact section is active
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLogo logoText={language === "es" ? logoTextEs : logoText} />
            <NavItems
              items={language === "es" ? navigationDataEs : navgitationData}
              onItemClick={handleNavClick}
              activeSection={activeSection}
              className="hidden md:flex ml-10 space-x-8"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="hidden md:block text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              {language === "en" ? "ES" : "EN"}
            </button>

            <MobileMenuButton
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <NavItems
              items={language === "es" ? navigationDataEs : navgitationData}
              onItemClick={handleNavClick}
              activeSection={activeSection}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white flex flex-col"
            />

            <div className="px-2 pb-3">
              <button
                onClick={toggleLanguage}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium w-full text-left"
              >
                {language === "en" ? "ES" : "EN"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navigation;
