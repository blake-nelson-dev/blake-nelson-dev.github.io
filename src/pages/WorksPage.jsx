import React, { useState } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { worksData } from '../data/worksData';

export const WorksPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Get unique categories and statuses
  const categories = ['All', ...new Set(worksData.projects.map(p => p.category))];
  const statuses = ['All', ...new Set(worksData.projects.map(p => p.status).filter(Boolean))];

  // Filter projects based on both category and status
  const filteredProjects = worksData.projects
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .filter(p => selectedStatus === 'All' || p.status === selectedStatus);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">My Works</h1>

        {/* Technology Filter */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Filter by Technology</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        {statuses.length > 1 && (
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Filter by Status</h2>
            <div className="flex flex-wrap gap-4">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedStatus === status
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksPage;