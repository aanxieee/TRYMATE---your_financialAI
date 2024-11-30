export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface StockRecommendation {
  symbol: string;
  name: string;
  confidence: number;
  reason: string;
  potentialGrowth: number;
}