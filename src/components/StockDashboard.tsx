import React from 'react';
import { StockCard } from './StockCard';
import { RecommendationCard } from './RecommendationCard';
import { mockStocks, mockRecommendations } from '../data/mockData';

export const StockDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockStocks.map((stock) => (
              <StockCard key={stock.symbol} stock={stock} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockRecommendations.map((recommendation) => (
              <RecommendationCard key={recommendation.symbol} recommendation={recommendation} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};