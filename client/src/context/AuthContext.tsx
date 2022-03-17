import { createContext, PropsWithChildren, useContext, useState } from "react";

const AuthContext = createContext(
  {} as {
    token: string | null;
    isLoggedIn: boolean;
    login: (newToken: string) => void;
    logout: () => void;
  }
);

interface AuthProviderProps {
  isLoggedIn?: boolean;
}

export const AuthProvider = ({
  isLoggedIn,
  children,
}: PropsWithChildren<AuthProviderProps>) => {
  const [token, setToken] = useState<string | null>(null);

  const login = (newToken: string) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, isLoggedIn: isLoggedIn ?? !!token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
