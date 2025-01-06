import React, { createContext, useContext, useState, useEffect } from 'react';
import * as AuthService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user session on app load
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await AuthService.getUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (email, password) => {
    await AuthService.login(email, password);
    const userData = await AuthService.getUser(); // Fetch user data after login
    setUser(userData);
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
