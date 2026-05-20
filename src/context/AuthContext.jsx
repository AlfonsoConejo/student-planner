import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const API_URL = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try{
        const res = await fetch (`${API_URL}/api/auth/me`, {
          credentials: "include"
        });

        const data = await res.json();

        if (!res.ok){
          setUser(null);
          return;

        }

        // Set user
        setUser(data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};