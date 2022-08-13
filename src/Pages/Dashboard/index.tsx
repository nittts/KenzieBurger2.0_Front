import API from "../../Services/API";
import { useEffect, useState } from "react";
import { Product } from "../../@Types/CartProvider";
import { motion } from "framer-motion";
import Header from "../../Components/Header";
import DashShowCase from "./DashShowCase";
import { Flex, Spinner } from "@chakra-ui/react";

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    await API.get("/products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header showProducts={showProducts} />

      {loading ? (
        <Flex align={"center"} justifyContent={"center"} w={"100vw"} h={"90vh"}>
          <Spinner
            boxSize={32}
            color={"#32b467"}
            speed="0.5s"
            thickness="0.5rem"
            size={"xl"}
            label={"loading..."}
          />
        </Flex>
      ) : (
        <>
          {filteredProducts.length === 0 ? (
            <DashShowCase products={products} />
          ) : (
            <DashShowCase products={filteredProducts} />
          )}
        </>
      )}
    </motion.div>
  );
}
