'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { login as apiLogin, register as apiRegister } from '@/lib/api';

interface User {
    id: string;
    email: string;
    fullName?: string;
    role: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: {email: string, password: string}) => Promise<void>;
  register: (data: {email: string, password: string, fullName: string}) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  isLoading: true,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persistent session
    const storedUser = localStorage.getItem('designease_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        // Si le JSON est invalide, nettoyer le localStorage
        console.error('Invalid stored user data, clearing...', error);
        localStorage.removeItem('designease_user');
        localStorage.removeItem('designease_token');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: {email: string, password: string}) => {
     try {
        const data = await apiLogin(credentials);
        localStorage.setItem('designease_token', data.access_token);
        localStorage.setItem('designease_user', JSON.stringify(data.user));
        setUser(data.user);
     } catch (err) {
        console.error("Login Error", err);
        throw err;
     }
  };

  const register = async (data: {email: string, password: string, fullName: string}) => {
      try {
        const res = await apiRegister(data);
        // Register logs in user automatically
        localStorage.setItem('designease_token', res.access_token);
        localStorage.setItem('designease_user', JSON.stringify(res.user));
        setUser(res.user);
      } catch (err) {
          console.error("Register Error", err);
          throw err;
      }
  };

  const logout = () => {
    localStorage.removeItem('designease_user');
    localStorage.removeItem('designease_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
