// src/pages/HomePage.jsx
import React from 'react';
import { homeData } from '../data/homeData';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">{homeData.name}</h1>
            <p className="text-xl text-gray-600 mb-8">{homeData.title}</p>
            <p className="text-gray-600 max-w-xl mb-12">{homeData.bio}</p>
            
            <a 
              href="/works" 
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              View My Work
            </a>
          </div>

          {/* Right Profile Image with Unique Border */}
          <div className="relative">
            {/* Background circle for depth */}
            <div className="absolute -top-3 -right-3 w-70 h-70 bg-gray-50 rounded-full" />
            
            {/* Decorative arc */}
            <svg className="absolute -top-4 -right-4 w-72 h-72" viewBox="0 0 200 200">
              <path
                d="M100,0 A100,100 0 0,1 200,100"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="2"
                className="opacity-60"
              />
            </svg>
            
            {/* Main image container */}
            <div className="relative w-64 h-64">
              {/* Subtle dot accent */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-200 rounded-full" />
              
              {/* Main image */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                <img
                  src={homeData.image}
                  alt={homeData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom decorative element */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-2 border-gray-200 rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;