import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSessions from 'expo-auth-session';

import { authAPI, dataAPI } from '../services';

type UserDTO = {
  avatar_url: string; 
  login: string 
}

type AuthContextData = {
  user: UserDTO;
  loading: boolean;
  signInGithub(): Promise<void>;
  signOut: () => void;
}

type PropsProvider = {
  children: ReactNode;
}

type AuthResponse = {
  type: string; 
  params: { 
    code: string; 
  };
}

WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: PropsProvider) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [loading, setLoading] = useState(false);

  const signInGithub = async () => {
    try {
      setLoading(true);
      const CLIENT_SECRET = '25ce472f02c5976af67e13e4da4f08aa872cfa8e';
      const CLIENT_ID = 'f96bdd1b5a6332f09d9f';
      const SCOPE = 'read:user';

      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;

      const { type, params: { code }} = await AuthSessions.startAsync({ authUrl: authUrl }) as AuthResponse;

      if (type === "success") {
        const tokenUrl = `access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`
        const { data: dataToken } = await authAPI.post(tokenUrl);
       
        const { data: dataUser } = await dataAPI.get('user', {
          headers: {
            Authorization: `token ${dataToken.access_token}`
          }
        });

        setUser(dataUser);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const signOut = async () => {
    setUser({} as UserDTO);
  }

  return <AuthContext.Provider value={{ user, loading, signInGithub, signOut }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
