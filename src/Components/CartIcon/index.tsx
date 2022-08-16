import { Container } from "./style";

import { IoCart } from "react-icons/io5";
import { useCart } from "../../Contexts/Cart";
import { useNavigate } from "react-router-dom";

interface ICartIcon {
  handleModal: () => void;
}

export default function CartIcon({ handleModal }: ICartIcon) {
  const { cart } = useCart();

  return (
    <Container counter={cart.length} onClick={handleModal}>
      {cart.length > 0 ? (
        <div className="counterContainer">
          <div className="counter">
            <span>{cart.length}</span>
          </div>
          <IoCart />
        </div>
      ) : (
        <IoCart />
      )}
    </Container>
  );
}
