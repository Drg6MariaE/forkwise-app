import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// ⚠️ REPLACE THIS with your specific IP address
// Windows: run 'ipconfig' in terminal
// Mac: run 'ifconfig' or Check System Settings > Network
const BASE_URL = 'http://192.168.1.65:8000'; 

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Adds the Auth Token to every request automatically
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await SecureStore.getItemAsync('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error fetching token', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;