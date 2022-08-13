import { Content } from "./styles";

interface ICardProps {
  image: string;
  title: string;
  category: string;
  price: number;
  id: number;
  index: number;
}

export default function Card({ id, category, image, price, title, index }: ICardProps) {
  return (
    <Content className="product" key={index}>
      <div className="Product-img">
        <img src={image} alt={"produto"} />
      </div>
      <h1 className="prod-title">{title}</h1>
      <h3 className="prod-cat">{category}</h3>
      <p className="prod-price"> Preço: {price}</p>
      <button onClick={() => console.log(index)}>Adicionar</button>
    </Content>
  );
}
