import React, { useState, useContext } from "react";
import { portfolioData, portfolioFilters } from "../data/portfolio";
import { portfolioData as portfolioDataEs, portfolioFilters as portfolioFiltersEs} from "../data/portfolio-es";
import { cardHoverEffect, buttonHoverEffect } from "../utils/styles";
import { LanguageContext } from "../utils/LanguageContext";

/**
 * Individual portfolio item component
 * Displays project card with overlay, links, and information
 * @param {Object} item - Portfolio item data
 */
const PortfolioItem = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`group relative bg-white rounded-lg overflow-hidden shadow-lg ${cardHoverEffect}`}
    >
      {/* Project image */}
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        {!imageLoaded && (
          <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
            <span className="text-gray-400 text-sm">Loading...</span>
          </div>
        )}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className={`w-full h-48 object-cover group-hover:scale-105 transition-all duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </div>

      {/* Hover overlay with action buttons */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm mb-4">{item.description}</p>

          {/* Action buttons */}
          <div className="flex justify-center space-x-4 flex-wrap gap-2">
            {item.demoUrl && (
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm transition-colors ${buttonHoverEffect}`}
              >
                {item.demoText || "View Demo"}
              </a>
            )}
            {item.profileUrl && (
              <a
                href={item.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm transition-colors ${buttonHoverEffect}`}
              >
                {item.profileText || "Visit Profile"}
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded text-sm transition-colors ${buttonHoverEffect}`}
              >
                GitHub
              </a>
            )}
            {item.articleUrl && (
              <a
                href={item.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm transition-colors ${buttonHoverEffect}`}
              >
                {item.articleText || "Read Article"}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card content below image */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{item.shortDescription}</p>

        {/* Category badge */}
        <div className="flex items-center justify-between">
          <span
            className={`inline-block px-2 py-1 text-xs rounded-full ${
              item.category === "projects"
                ? "bg-blue-100 text-blue-800"
                : item.category === "articles"
                ? "bg-green-100 text-green-800"
                : "bg-purple-100 text-purple-800"
            }`}
          >
            {item.categoryLabel ||
              item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>

          {/* Technologies used (if available) */}
          {item.technologies && item.technologies.length > 0 && (
            <div className="text-xs text-gray-500">
              {item.technologies.slice(0, 2).join(", ")}
              {item.technologies.length > 2 && "..."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Portfolio filter buttons component
 * Allows filtering portfolio items by category
 */
const PortfolioFilters = ({ activeFilter, onFilterChange }) => {
  const { language } = useContext(LanguageContext);
  const currentFilters =
    language === "es" ? portfolioFiltersEs : portfolioFilters;

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {currentFilters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === filter.key
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

/**
 * Portfolio section header component
 * Title and filter buttons for the portfolio section
 */
const PortfolioHeader = ({ activeFilter, onFilterChange }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        {language === "es" ? "Portafolio" : "Portfolio"}
      </h2>
      <PortfolioFilters
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};

/**
 * Main Portfolio Component
 * Displays filterable portfolio grid with projects, articles, and personal links
 */
const Portfolio = () => {
  const { language } = useContext(LanguageContext);
  const [activeFilter, setActiveFilter] = useState("all");

  // Get current language data
  const currentData = language === "es" ? portfolioDataEs : portfolioData;

  // Filter portfolio items based on active filter
  const filteredItems =
    activeFilter === "all"
      ? currentData
      : currentData.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio header with filters */}
        <PortfolioHeader
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {language === "es"
                ? "No se encontraron elementos para esta categoría."
                : "No items found for this category."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
