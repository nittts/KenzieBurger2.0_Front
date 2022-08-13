import { Container } from "./style";

import { IoCart } from "react-icons/io5";
import { useCart } from "../../Contexts/Cart";
import { useNavigate } from "react-router-dom";

export default function CartIcon() {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <Container counter={cart.length}>
      {cart.length > 0 ? (
        <div className="counterContainer">
          <div className="counter">
            <span>{cart.length}</span>
          </div>
          <IoCart onClick={() => navigate("/cart")} />
        </div>
      ) : (
        <IoCart onClick={() => navigate("/cart")} />
      )}
    </Container>
  );
}
