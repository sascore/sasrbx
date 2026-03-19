import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface DiscordUser {
  id: string;
  username: string;
  email: string;
  avatar: string | null;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: DiscordUser | null;
  login: (user: DiscordUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<DiscordUser | null>(() => {
    const stored = localStorage.getItem("discord_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (discordUser: DiscordUser) => {
    setUser(discordUser);
    localStorage.setItem("discord_user", JSON.stringify(discordUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("discord_user");
    localStorage.removeItem("discord_access_token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
