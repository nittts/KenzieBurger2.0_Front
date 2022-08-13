import { Container } from "./style";

import { IoCart } from "react-icons/io5";

export default function CartIcon() {
  const cart = [2, 2];

  return (
    <Container counter={cart.length}>
      {cart.length > 0 ? (
        <div className="counterContainer">
          <div className="counter">{cart.length}</div>
          <IoCart />
        </div>
      ) : (
        <IoCart />
      )}
    </Container>
  );
}
