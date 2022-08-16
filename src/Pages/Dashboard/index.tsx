import API from "../../Services/API";
import { useEffect, useState } from "react";
import { Product } from "../../@Types/CartProvider";
import { motion } from "framer-motion";
import Header from "../../Components/Header";
import DashShowCase from "./DashShowCase";
import { Flex, Spinner } from "@chakra-ui/react";
import CartModal from "../../Components/CartModal";

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

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
    const filteredProdArr = products.filter(
      (prod) =>
        prod.title.toLowerCase().includes(userInput.toLowerCase()) ||
        prod.category.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredProducts(filteredProdArr);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {modal && <CartModal handleModal={handleModal} />}
      <Header showProducts={showProducts} handleModal={handleModal} />
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
