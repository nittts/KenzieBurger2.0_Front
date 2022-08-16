import { useEffect, useState } from "react";
import { Product } from "../../@Types/CartProvider";
import { useCart } from "../../Contexts/Cart";
import ModalCard from "../ModalCard";
import { Container, Content, EmptyCart } from "./style";

interface ICartModalProps {
  handleModal: () => void;
}

export default function CartModal({ handleModal }: ICartModalProps) {
  const modalFilter = (event: any) => {
    if (event.target.id === "modal-bg") {
      handleModal();
    }
  };

  const { cart, setCart } = useCart();

  const [showCaseCart, setShowCaseCart] = useState<Product[]>([]);

  useEffect(() => {
    const cartFiltered = cart.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    setShowCaseCart(cartFiltered);
  }, [cart]);

  return (
    <Container id={"modal-bg"} onClick={(e) => modalFilter(e)}>
      <Content>
        {cart.length === 0 ? (
          <EmptyCart>
            <header>
              <h1>Carrinho de Compras</h1>
              <span onClick={handleModal}>X</span>
            </header>
            <div className="empty-cart">
              <h2>Sua sacola esta vazio</h2>
              <p>Adicione items</p>
            </div>
          </EmptyCart>
        ) : (
          <>
            <header>
              <h1>Carrinho de Compras</h1>
              <span onClick={handleModal}>X</span>
            </header>
            <div className="cart-container">
              {showCaseCart.map((item) => {
                return <ModalCard product={item} />;
              })}
            </div>
            <article>
              <div>
                <h3>Total</h3>
                <span>R$ {cart.reduce((a, b) => a + b.price, 0).toFixed(2)}</span>
              </div>
              <button
                onClick={() => {
                  handleModal();
                  setCart([]);
                }}
              >
                Remover Todos
              </button>
            </article>
          </>
        )}
      </Content>
    </Container>
  );
}
