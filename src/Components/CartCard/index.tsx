import { Product } from "../../@Types/CartProvider";
import { useCart } from "../../Contexts/Cart";
import { Container, Content } from "./style";

interface ICardCardProps {
  product: Product;
  index: number;
}

export default function CartCard({ product, index }: ICardCardProps) {
  const { title, category, price, image } = product;

  const { removeFromCart } = useCart();

  return (
    <Container>
      <img src={image} alt={title} />
      <Content>
        <h1>{title}</h1>
        <p>{category}</p>
        <span>${price}</span>
        <button onClick={() => removeFromCart(index)}>Remove</button>
      </Content>
    </Container>
  );
}
