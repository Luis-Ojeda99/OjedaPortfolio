import React from "react";
import { skills } from "../data/skills";
import { cardHoverEffect, iconHoverEffect } from '../utils/styles';

/**
 * Skills section header component
 * Contains the main heading and description
 */
const SkillsHeader = () => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
    <p className="text-lg text-gray-600 leading-relaxed">
      Technologies and frameworks I work with to build modern applications
    </p>
  </div>
);

/**
 * Individual skill card component
 * Displays a single skill with icon, name, and description
 * @param {Object} skill - Skill object containing name, icon, and description
 * @param {Number} index - Index for potential animation delays
 */
const SkillCard = ({ skill, index }) => (
  <div className={`group bg-gray-50 rounded-lg p-6 hover:bg-blue-50 ${cardHoverEffect}`}>
    <div className="text-center">
      <div className={`text-4xl mb-4 ${iconHoverEffect}`}>
        {skill.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {skill.description}
      </p>
    </div>
  </div>
);

/**
 * Main Skills Component
 * Displays a grid of technical skills with hover effects and animations
 * Organized by categories: Core Languages, Frontend Frameworks & Technologies, Backend Frameworks & Runtime, and Database Systems
 */
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SkillsHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;