import { ReactNode } from "react";

export interface Product {
  image: string;
  title: string;
  category: string;
  price: number;
  id: number;
}

export interface ICartProviderProps {
  children: ReactNode;
}

export interface ICartContextData {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productIndex: number) => void;
  setCart: (Array: Product[]) => void;
  filterCart: (product: Product) => void;
}
