import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const API_URL = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const logoutUser = async () => {
    try {
      await fetch(`${API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include"
      });
    } catch {}

    setUser(null);
  };

  useEffect(() => {
    const checkAuth = async () => {
      try{
        // Authenticate user
        const resMe = await fetch (`${API_URL}/api/auth/me`, {
          credentials: "include"
        });

        const dataMe = await resMe.json();

        if (!resMe.ok){
          //Refresh access token
          const resRefresh = await fetch(`${API_URL}/api/auth/refresh`, {
            method: "POST",
            credentials: "include"
          });

          if(!resRefresh.ok){
            // Log out user
            await logoutUser();
            return;
          }

          // Authenticate user again
          const resMeVerification = await fetch (`${API_URL}/api/auth/me`, {
            credentials: "include"
          });

          const dataMeVerification = await resMeVerification.json();
          
          if(!resMeVerification.ok){
            // Log out user
            await logoutUser();
            return;
          }

          setUser(dataMeVerification.user);
          return;
        }

        // Set user
        setUser(dataMe.user);
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