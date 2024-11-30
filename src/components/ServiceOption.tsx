import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Megaphone } from 'lucide-react';

interface ServiceOptionProps {
  type: 'stocks' | 'marketing';
  onSelect: () => void;
}

export const ServiceOption: React.FC<ServiceOptionProps> = ({ type, onSelect }) => {
  const isStocks = type === 'stocks';
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
      onClick={onSelect}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 z-0" />
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80')",
          backgroundSize: '400px',
        }}
      />
      <div className="relative z-10">
        {isStocks ? (
          <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
        ) : (
          <Megaphone className="w-12 h-12 text-purple-600 mb-4" />
        )}
        <h3 className="text-2xl font-bold mb-2">
          {isStocks ? 'Stock Prediction' : 'Digital Marketing'}
        </h3>
        <p className="text-gray-600">
          {isStocks
            ? 'AI-powered stock analysis and investment recommendations'
            : 'Smart marketing strategies and campaign optimization'}
        </p>
      </div>
    </motion.div>
  );
};