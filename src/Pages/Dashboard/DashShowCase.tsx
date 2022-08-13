import { DashShowCaseContainer as Container } from "./style";
import { Product } from "../../@Types/CartProvider";
import Card from "../../Components/Card";

interface DashShowCaseProps {
  products: Product[];
}

export default function DashShowCase({ products }: DashShowCaseProps) {
  return (
    <Container>
      {products.map((product, index) => {
        return (
          <Card
            index={index}
            key={index}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
            id={product.id}
          />
        );
      })}
    </Container>
  );
}
