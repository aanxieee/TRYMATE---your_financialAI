import { Stock, StockRecommendation } from '../types/stock';

export const mockStocks: Stock[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 173.45, change: 2.31, changePercent: 1.35 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 425.22, change: -1.15, changePercent: -0.27 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 147.68, change: 3.42, changePercent: 2.37 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.35, change: 1.23, changePercent: 0.69 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 875.28, change: 15.67, changePercent: 1.82 },
];

export const mockRecommendations: StockRecommendation[] = [
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    confidence: 0.89,
    reason: 'Strong AI market growth and dominant position in GPU market',
    potentialGrowth: 15.3
  },
  {
    symbol: 'AMD',
    name: 'Advanced Micro Devices',
    confidence: 0.78,
    reason: 'Gaining market share in server CPU market',
    potentialGrowth: 12.5
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    confidence: 0.72,
    reason: 'EV market expansion and energy storage growth',
    potentialGrowth: 18.7
  }
];