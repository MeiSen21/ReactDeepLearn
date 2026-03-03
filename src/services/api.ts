import axios from 'axios';
import { message } from 'antd';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle global errors
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 401:
          message.error('Unauthorized. Please login again.');
          // Redirect to login if needed
          break;
        case 403:
          message.error('Forbidden. You do not have permission.');
          break;
        case 404:
          message.error('Resource not found.');
          break;
        case 500:
          message.error('Server error. Please try again later.');
          break;
        default:
          message.error(data.message || 'An unknown error occurred.');
      }
    } else if (error.request) {
      message.error('Network error. Please check your connection.');
    } else {
      message.error('An error occurred.');
    }
    return Promise.reject(error);
  },
);

export default api;
