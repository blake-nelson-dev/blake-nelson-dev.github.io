import React from 'react';
import { contactData } from '../data/contactData';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">{contactData.introduction.title}</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Introduction */}
          <div className="p-8 border-b">
            <p className="text-gray-600 leading-relaxed">
              {contactData.introduction.description}
            </p>
          </div>

          {/* Contact Information */}
          <div className="p-8 border-b">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" size={20} />
                <a 
                  href={`mailto:${contactData.contact.email}`}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {contactData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-400" size={20} />
                <span className="text-gray-600">{contactData.contact.timeZone}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-8 border-b">
            <h2 className="text-xl font-semibold mb-6">Connect with Me</h2>
            <div className="flex gap-4">
              <a
                href={contactData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href={contactData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* What I'm Looking For */}
          <div className="p-8 border-b">
            <h2 className="text-xl font-semibold mb-4">{contactData.interests.title}</h2>
            <p className="text-gray-600 mb-4">{contactData.interests.description}</p>
            <ul className="space-y-2">
              {contactData.interests.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume Download */}
          {contactData.resume.available && (
            <div className="p-8">
              <button className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                {contactData.resume.buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};