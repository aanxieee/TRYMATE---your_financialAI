import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com" className="text-gray-400 hover:text-gray-500">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-500">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-center text-gray-500">
            Made with ❤️ by AANYA MITTAL
          </p>
        </div>
      </div>
    </footer>
  );
};