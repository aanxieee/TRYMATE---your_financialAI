import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className="animate-spin text-indigo-600" size={24} />
    </div>
  );
};