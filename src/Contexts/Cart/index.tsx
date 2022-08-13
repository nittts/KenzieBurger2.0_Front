import { createContext, useCallback, useState, useContext } from "react";
import { ICartContextData, ICartProviderProps, Product } from "../../@Types/CartProvider";

const CartContext = createContext<ICartContextData>({} as ICartContextData);

const CartProvider = ({ children }: ICartProviderProps) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const cart = localStorage.getItem("@KenzieBurger:cart");

    if (cart) {
      return JSON.parse(cart);
    }
    return [] as Product[];
  });

  const addToCart = useCallback(
    (product: Product) => {
      const plusCart = [...cart, product];
      localStorage.setItem("@KenzieBurger:cart", JSON.stringify(plusCart));
      setCart(plusCart);
    },
    [cart]
  );

  const removeFromCart = useCallback(
    (productIndex: number) => {
      const filteredCart = cart.filter((_, index) => index !== productIndex);
      localStorage.setItem("@KenzieBurger:cart", JSON.stringify(filteredCart));
      setCart(filteredCart);
    },
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
