import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  onBack?: () => void;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ onBack, title }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          {onBack && (
            <button
              onClick={onBack}
              className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
      </div>
    </header>
  );
};