import { createContext } from 'react';
import { ReactNode } from 'react';

type AuthContextData = {
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({
  children
}: AuthProviderProps) {
  const isAuthenticated = false;
  return (
    <AuthContext.Provider value={{
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  )
}