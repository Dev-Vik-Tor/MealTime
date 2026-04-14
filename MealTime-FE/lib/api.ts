import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const restaurantApi = {
  getAll: () => api.get('/api/restaurants'),
  getById: (id: string) => api.get(`/api/restaurants/${id}`),
};

export const orderApi = {
  getAll: () => api.get('/api/orders'),
  create: (data: any) => api.post('/api/orders', data),
  getById: (id: string) => api.get(`/api/orders/${id}`),
};
