import React from "react";
import CartCard from "../../Components/CartCard";
import Header from "../../Components/Header";
import { useCart } from "../../Contexts/Cart";

export default function Cart() {
  const { cart } = useCart();

  return (
    <>
      <Header />
      {cart.map((item, index) => {
        return <CartCard index={index} product={item} />;
      })}
    </>
  );
}
