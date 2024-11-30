import React from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';
import { StockRecommendation } from '../types/stock';

interface RecommendationCardProps {
  recommendation: StockRecommendation;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-indigo-500">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <Sparkles className="text-indigo-500 mr-2" size={20} />
            <h3 className="text-lg font-semibold">{recommendation.symbol}</h3>
          </div>
          <p className="text-sm text-gray-600">{recommendation.name}</p>
        </div>
        <div className="flex items-center bg-indigo-100 px-2 py-1 rounded">
          <TrendingUp className="text-indigo-500 mr-1" size={16} />
          <span className="text-indigo-700 font-medium">
            {recommendation.potentialGrowth.toFixed(1)}%
          </span>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <div className="flex-1">
            <div className="h-2 bg-gray-200 rounded">
              <div 
                className="h-2 bg-indigo-500 rounded"
                style={{ width: `${recommendation.confidence * 100}%` }}
              ></div>
            </div>
          </div>
          <span className="ml-2 text-sm font-medium text-indigo-600">
            {(recommendation.confidence * 100).toFixed(0)}%
          </span>
        </div>
        <p className="text-sm text-gray-600">{recommendation.reason}</p>
      </div>
    </div>
  );
};