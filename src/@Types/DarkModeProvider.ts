import { ReactNode } from "react";

export interface IDarkModeProviderProps {
  children: ReactNode;
}

export interface IDarkModeContextData {
  isDarkMode: boolean;
  handleDarkMode: () => void;
}
