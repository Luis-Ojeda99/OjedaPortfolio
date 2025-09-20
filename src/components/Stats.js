import React, { useState, useEffect, useRef, useContext } from "react";
import { cardHoverEffect, iconHoverEffect } from "../utils/styles";
import { statsData, statsConfig } from "../data/stats";
import {
  statsData as statsDataEs,
  statsConfig as statsConfigEs,
} from "../data/stats-es";
import { LanguageContext } from "../utils/LanguageContext";

/**
 * Individual statistic card with animated counter
 * Uses Intersection Observer to trigger animation when visible
 * @param {Object} stat - Statistic object with icon, number, and label
 * @param {Number} delay - Animation delay in milliseconds
 */
const StatCard = ({ stat, delay = 0 }) => {
  const { language } = useContext(LanguageContext);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  // Get current config based on language
  const currentConfig = language === 'es' ? statsConfigEs : statsConfig;

  // Intersection Observer to detect when card enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const increment = stat.number / currentConfig.animationSteps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            setCount(stat.number);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, currentConfig.animationDuration / currentConfig.animationSteps);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, stat.number, delay, currentConfig]);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg p-8 shadow-lg ${cardHoverEffect}`}
    >
      <div className="text-center">
        <div className={`text-4xl mb-4 text-blue-600 ${iconHoverEffect}`}>
          {stat.icon}
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-2">{count}</div>
        <div className="text-gray-600 font-medium">{stat.label}</div>
      </div>
    </div>
  );
};

/**
 * Main Stats Component
 * Displays portfolio statistics with animated counters
 * Statistics animate when they come into view using Intersection Observer
 */
const Stats = () => {
  const { language } = useContext(LanguageContext);
  
  // Get current data and config based on language
  const currentData = language === 'es' ? statsDataEs : statsData;
  const currentConfig = language === 'es' ? statsConfigEs : statsConfig;

  return (
    <section id="stats" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentData.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              delay={index * currentConfig.staggerDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;