import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import API from "../../Services/API";

import { Product } from "../../@Types/CartProvider";
import DashShowCase from "./DashShowCase";

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const loadProducts = () => {
    API.get("/products").then((res) => setProducts(res.data));
  };
  useEffect(() => {
    loadProducts();
  }, []);

  const showProducts = (userInput: string) => {
    const productsArr = [...products];

    const filteredProdArr = productsArr.filter(
      (prod) =>
        prod.title.toLowerCase() === userInput.toLowerCase() ||
        prod.category.toLowerCase() === userInput.toLowerCase()
    );

    setFilteredProducts(filteredProdArr);
  };

  return (
    <div>
      <Header />
      <>
        {filteredProducts.length === 0 ? (
          <DashShowCase products={products} />
        ) : (
          <DashShowCase products={filteredProducts} />
        )}
      </>
    </div>
  );
}
