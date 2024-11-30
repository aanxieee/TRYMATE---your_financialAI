import { useState, useEffect } from 'react';
import { Stock } from '../types/stock';
import { mockStocks } from '../data/mockData';

export const useStockData = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        // In a real app, this would be an API call
        setStocks(mockStocks);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch stock data');
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return { stocks, loading, error };
};