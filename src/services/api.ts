import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const stockApi = {
  getPrediction: async (symbol: string) => {
    const response = await axios.post(`${API_BASE_URL}/predict/stock/`, { symbol });
    return response.data;
  },
};

export const marketingApi = {
  getPrediction: async (data: any) => {
    const response = await axios.post(`${API_BASE_URL}/predict/marketing/`, data);
    return response.data;
  },
};