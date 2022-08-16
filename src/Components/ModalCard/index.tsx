import { FaTrash } from "react-icons/fa";
import { Container, Content, Counter } from "./style";
import { Product } from "../../@Types/CartProvider";
import { useCart } from "../../Contexts/Cart";

interface ModalCardProps {
  product: Product;
}

export default function ModalCard({ product }: ModalCardProps) {
  const { cart, addToCart, removeFromCart, filterCart } = useCart();
  const { image, title } = product;

  const amount = cart.filter((item) => item === product).length;

  return (
    <Container>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <Content>
        <div>
          <h2>{title}</h2>
          <FaTrash onClick={() => filterCart(product)} />
        </div>
        <Counter>
          <span className="minus" onClick={() => removeFromCart(cart.indexOf(product))}>
            -
          </span>
          <p>{amount}</p>
          <span className="plus" onClick={() => addToCart(product)}>
            +
          </span>
        </Counter>
      </Content>
    </Container>
  );
}
