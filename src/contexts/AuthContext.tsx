import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  username: string;
  login: () => void;
  logout: () => void;
}

const defaultAuth: AuthContextType = {
  isLoggedIn: false,
  username: "",
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuth);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, username: "Falke", login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
