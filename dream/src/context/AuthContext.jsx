import { createContext, useContext, useState } from "react";


const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD;

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    return sessionStorage.getItem("kayem_admin") === "true";
  });

  const login = (password) => {
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
  return useContext(AuthContext);
}
