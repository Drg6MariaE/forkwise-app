import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import api from '../api/axios';

interface User {
  id: string;
  email: string;
  fullName?: string;
  goals?: string[]; 
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isFirstLaunch: boolean; 
  login: (email: string, password: string) => Promise<void>;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAppInit: () => Promise<void>; 
  completeOnboarding: () => Promise<void>; 
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: true,
  isFirstLaunch: true,

  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    const { user, token } = response.data;
    await SecureStore.setItemAsync('token', token);
    await SecureStore.setItemAsync('user', JSON.stringify(user));
    set({ user, token, isLoading: false });
  },

  register: async (fullName, email, password) => {
    const response = await api.post('/auth/register', { fullName, email, password });
    const { user, token } = response.data;
    await SecureStore.setItemAsync('token', token);
    await SecureStore.setItemAsync('user', JSON.stringify(user));
    set({ user, token, isLoading: false });
  },

  logout: async () => {
    await SecureStore.deleteItemAsync('token');
    await SecureStore.deleteItemAsync('user');
    set({ user: null, token: null });
  },

  completeOnboarding: async () => {
    await SecureStore.setItemAsync('hasLaunched', 'true');
    set({ isFirstLaunch: false });
  },

  checkAppInit: async () => {
    try {
      
      const hasLaunched = await SecureStore.getItemAsync('hasLaunched');
      
      
      const token = await SecureStore.getItemAsync('token');
      const userStr = await SecureStore.getItemAsync('user');
      
      let userData = null;
      if (token && userStr) {
        userData = JSON.parse(userStr);
      }

      set({ 
        isFirstLaunch: hasLaunched === null, 
        token: token || null,
        user: userData,
        isLoading: false 
      });

    } catch (e) {
      set({ isLoading: false });
    }
  }
}));