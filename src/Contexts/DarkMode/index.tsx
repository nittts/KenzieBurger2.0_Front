import { createContext, useContext, useState, useCallback } from "react";
import { IDarkModeProviderProps, IDarkModeContextData } from "../../@Types/DarkModeProvider";

const DarkModeContext = createContext<IDarkModeContextData>({} as IDarkModeContextData);

const DarkModeProvider = ({ children }: IDarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => useContext(DarkModeContext);

export { useDarkMode, DarkModeProvider };
