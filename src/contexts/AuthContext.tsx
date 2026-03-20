import { createContext, useContext, useState, ReactNode } from "react";

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

interface PersistedAuthSession {
  provider: "discord";
  oauthCompleted: true;
  authenticatedAt: string;
  user: DiscordUser;
}

const AUTH_STORAGE_KEY = "employee_auth_session";
const LEGACY_USER_KEY = "discord_user";
const LEGACY_TOKEN_KEY = "discord_access_token";

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

const isValidDiscordUser = (value: unknown): value is DiscordUser => {
  if (!value || typeof value !== "object") return false;

  const user = value as Record<string, unknown>;

  return (
    typeof user.id === "string" &&
    user.id.length > 0 &&
    typeof user.username === "string" &&
    user.username.length > 0 &&
    typeof user.email === "string" &&
    user.email.length > 0 &&
    (typeof user.avatar === "string" || user.avatar === null)
  );
};

const restoreSession = (): DiscordUser | null => {
  try {
    const rawSession = localStorage.getItem(AUTH_STORAGE_KEY);

    if (!rawSession) {
      // Clean up any legacy placeholder auth shape so old fake sessions cannot auto-login.
      localStorage.removeItem(LEGACY_USER_KEY);
      localStorage.removeItem(LEGACY_TOKEN_KEY);
      return null;
    }

    const parsed = JSON.parse(rawSession) as Partial<PersistedAuthSession>;

    if (
      parsed.provider === "discord" &&
      parsed.oauthCompleted === true &&
      isValidDiscordUser(parsed.user)
    ) {
      return parsed.user;
    }

    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(LEGACY_USER_KEY);
    localStorage.removeItem(LEGACY_TOKEN_KEY);
    return null;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(LEGACY_USER_KEY);
    localStorage.removeItem(LEGACY_TOKEN_KEY);
    return null;
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<DiscordUser | null>(() => restoreSession());

  const login = (discordUser: DiscordUser) => {
    const session: PersistedAuthSession = {
      provider: "discord",
      oauthCompleted: true,
      authenticatedAt: new Date().toISOString(),
      user: discordUser,
    };

    setUser(discordUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));

    // Remove legacy keys to prevent old placeholder behavior from reappearing.
    localStorage.removeItem(LEGACY_USER_KEY);
    localStorage.removeItem(LEGACY_TOKEN_KEY);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(LEGACY_USER_KEY);
    localStorage.removeItem(LEGACY_TOKEN_KEY);
    sessionStorage.removeItem("discord_oauth_state");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
