import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Stock } from '../types/stock';

interface StockCardProps {
  stock: Stock;
}

export const StockCard: React.FC<StockCardProps> = ({ stock }) => {
  const isPositive = stock.change >= 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{stock.symbol}</h3>
          <p className="text-sm text-gray-600">{stock.name}</p>
        </div>
        {isPositive ? (
          <TrendingUp className="text-green-500" size={20} />
        ) : (
          <TrendingDown className="text-red-500" size={20} />
        )}
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold">${stock.price.toFixed(2)}</p>
        <div className={`flex items-center mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          <span className="font-medium">{isPositive ? '+' : ''}{stock.change.toFixed(2)}</span>
          <span className="ml-2">({stock.changePercent.toFixed(2)}%)</span>
        </div>
      </div>
    </div>
  );
};