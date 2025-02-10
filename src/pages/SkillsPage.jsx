// src/pages/SkillsPage.jsx
import React from 'react';
import { skillsData } from '../data/skillsData';

const SkillBar = ({ name, level, applications }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex justify-between mb-2">
      <span className="font-medium text-gray-800">{name}</span>
      <span className="text-gray-500">{level}%</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-2.5 mb-4">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
    {applications && (
      <p className="text-sm text-gray-600 mt-2">{applications}</p>
    )}
  </div>
);

const SkillCategory = ({ category, index }) => (
  <div className={`p-8 rounded-xl ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {category.name}
        </h2>
        {category.description && (
          <p className="text-gray-600">{category.description}</p>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  </div>
);

const CurrentLearning = ({ learning }) => (
  <div className="bg-white p-8 rounded-xl">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {learning.name}
      </h2>
      <ul className="space-y-2">
        {learning.items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const SkillsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {skillsData.introduction.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {skillsData.introduction.description}
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-6">
          {skillsData.categories.map((category, index) => (
            <SkillCategory 
              key={category.name}
              category={category} 
              index={index}
            />
          ))}
        </div>

        {/* Current Learning */}
        <div className="mt-6">
          {skillsData.currentLearning.map((learning, index) => (
            <CurrentLearning 
              key={index}
              learning={learning}
            />
          ))}
        </div>
      </div>
    </div>
  );
};