import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "./Authorization";
import { CartProvider } from "./Cart";
import { DarkModeProvider } from "./DarkMode";

import { IProviderProps } from "../@Types/Providers";

export default function Providers({ children }: IProviderProps) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <CartProvider>
          <DarkModeProvider>{children}</DarkModeProvider>
        </CartProvider>
      </ChakraProvider>
    </AuthProvider>
  );
}
