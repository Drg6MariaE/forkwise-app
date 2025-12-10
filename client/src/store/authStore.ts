// client/src/store/authStore.ts
import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import api from '../api/axios';

interface User {
  id: string;
  email: string;
  fullName?: string;
  goals?: string[]; // Added this to check if user has finished setup
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isFirstLaunch: boolean; // <--- NEW FLAG
  login: (email: string, password: string) => Promise<void>;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAppInit: () => Promise<void>; // Renamed from loadUser
  completeOnboarding: () => Promise<void>; // Call this after the 3 info pages
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
      // 1. Check if it's the first launch ever
      const hasLaunched = await SecureStore.getItemAsync('hasLaunched');
      
      // 2. Check if user is logged in
      const token = await SecureStore.getItemAsync('token');
      const userStr = await SecureStore.getItemAsync('user');
      
      let userData = null;
      if (token && userStr) {
        userData = JSON.parse(userStr);
      }

      set({ 
        isFirstLaunch: hasLaunched === null, // If null, it IS first launch
        token: token || null,
        user: userData,
        isLoading: false 
      });

    } catch (e) {
      set({ isLoading: false });
    }
  }
}));