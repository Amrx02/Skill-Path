import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api, AuthUser } from '../services/api';

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  authLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('skillpath_token'));
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const loadCurrentUser = async () => {
      if (!token) {
        setAuthLoading(false);
        return;
      }
      try {
        const data = await api.me();
        setUser(data.user);
      } catch {
        localStorage.removeItem('skillpath_token');
        setToken(null);
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    loadCurrentUser();
  }, [token]);

  const login = async (email: string, password: string) => {
    const data = await api.login({ email, password });
    localStorage.setItem('skillpath_token', data.token);
    setToken(data.token);
    setUser(data.user);
  };

  const signup = async (name: string, email: string, password: string) => {
    const data = await api.signup({ name, email, password });
    localStorage.setItem('skillpath_token', data.token);
    setToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('skillpath_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, authLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};