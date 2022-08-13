import { AnimatePresence } from "framer-motion";
import Router from "./Routes/Routes";
import GlobalStyle from "./Styles/Global";
import { useDarkMode } from "./Contexts/DarkMode";
import { LightTheme, DarkTheme } from "./Styles/Themes";
import { ThemeProvider } from "styled-components";

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <AnimatePresence>
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default App;
