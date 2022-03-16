import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Login } from "../pages/Login";

const AuthContext = createContext(
  {} as {
    token: string | null;
    isLoggedIn: boolean;
    login: (newToken: string) => void;
    logout: () => void;
  }
);

export const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [token, setToken] = useState<string | null>(null);

  const isLoggedIn = !!token;

  const login = (newToken: string) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {isLoggedIn ? children : <Login />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
