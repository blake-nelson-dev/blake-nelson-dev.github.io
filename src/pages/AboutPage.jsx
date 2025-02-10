// src/pages/AboutPage.jsx
import React from 'react';
import { aboutData } from '../data/aboutData';

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-900 mb-4">{children}</h2>
);

const SkillTag = ({ children }) => (
  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mr-2 mb-2">
    {children}
  </span>
);

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {aboutData.introduction.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {aboutData.introduction.description}
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why I Love What I Do</h2>
              <div className="space-y-4">
                {aboutData.introduction.passionPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <SectionTitle>Education</SectionTitle>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {aboutData.education.degree}
              </h3>
              <p className="text-gray-600 mb-1">Minor: {aboutData.education.minor}</p>
              <p className="text-gray-600 mb-4">
                {aboutData.education.university} • Class of {aboutData.education.graduationYear}
              </p>
              
              <h4 className="font-semibold text-gray-900 mt-4 mb-2">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {aboutData.education.relevantCourework.map((course, index) => (
                  <SkillTag key={index}>{course}</SkillTag>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Background */}
          <div className="mb-16">
            <SectionTitle>{aboutData.technicalBackground.title}</SectionTitle>
            <p className="text-gray-600 mb-6">
              {aboutData.technicalBackground.description}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {aboutData.technicalBackground.areas.map((area, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Development Environments</h3>
                <div className="flex flex-wrap">
                  {aboutData.skills.ides.map((ide, index) => (
                    <SkillTag key={index}>{ide}</SkillTag>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Programming Languages</h3>
                <div className="flex flex-wrap">
                  {aboutData.skills.languages.map((lang, index) => (
                    <SkillTag key={index}>{lang}</SkillTag>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Tools & Frameworks</h3>
                <div className="flex flex-wrap">
                  {aboutData.skills.tools.map((tool, index) => (
                    <SkillTag key={index}>{tool}</SkillTag>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Databases</h3>
                <div className="flex flex-wrap">
                  {aboutData.skills.databases.map((db, index) => (
                    <SkillTag key={index}>{db}</SkillTag>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <SectionTitle>Achievements</SectionTitle>
            <ul className="space-y-3">
              {aboutData.achievements.map((achievement, index) => (
                <li 
                  key={index}
                  className="flex items-start"
                >
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};