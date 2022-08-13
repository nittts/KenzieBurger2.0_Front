import { ReactNode } from "react";

export interface User {
  email: string;
  name: string;
  age: number;
  id: number;
}

export interface IAuthData {
  user: User;
  accessToken: string;
}

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthContextData {
  user: User;
  accessToken: string;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => void;
}
