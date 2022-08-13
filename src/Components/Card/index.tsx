import { Content } from "./styles";
import { useCart } from "../../Contexts/Cart";
import { Product } from "../../@Types/CartProvider";
interface ICardProps {
  image: string;
  title: string;
  category: string;
  price: number;
  id: number;
  index: number;
  product: Product;
}

export default function Card({ id, category, image, price, title, index, product }: ICardProps) {
  const { addToCart } = useCart();

  return (
    <Content className="product" key={index}>
      <div className="Product-img">
        <img src={image} alt={"produto"} />
      </div>
      <h1 className="prod-title">{title}</h1>
      <h3 className="prod-cat">{category}</h3>
      <p className="prod-price"> R$ {price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Adicionar</button>
    </Content>
  );
}
