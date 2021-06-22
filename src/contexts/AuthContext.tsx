import { createContext, ReactNode, useState } from 'react';
import Router from 'next/router';

import { firebase, auth } from '../services/firebase'

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextData = {
  user: User | undefined;
  isAuthenticated: boolean;
  signInWithGoogle: () => void;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(result => {
      console.log(result)
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
      Router.push('/rooms/new')
    })
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      signInWithGoogle
    }}>
      {children}
    </AuthContext.Provider>
  )
}