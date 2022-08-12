import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../Styles/Themes";

import { IProviderProps } from "../@Types/Providers";

export default function Providers({ children }: IProviderProps) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={false ? DarkTheme : LightTheme}>{children}</ThemeProvider>
    </ChakraProvider>
  );
}
