// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    return sessionStorage.getItem("kayem_admin") === "true";
  });

  const login = (password) => {
    if (!ADMIN_PASSWORD) {
      console.error("ADMIN_PASSWORD is not defined in .env file");
      return false;
    }

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("kayem_admin", "true");
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem("kayem_admin");
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}