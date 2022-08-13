import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "./Authorization";
import { CartProvider } from "./Cart";
import { DarkModeProvider } from "./DarkMode";

import { IProviderProps } from "../@Types/Providers";

export default function Providers({ children }: IProviderProps) {
  return (
    <CartProvider>
      <AuthProvider>
        <ChakraProvider>
          <DarkModeProvider>{children}</DarkModeProvider>
        </ChakraProvider>
      </AuthProvider>
    </CartProvider>
  );
}
