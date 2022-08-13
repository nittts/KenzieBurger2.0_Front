import { Container, Content } from "./style";
import { FaHamburger } from "react-icons/fa";
import { Switch } from "@chakra-ui/react";
import { useDarkMode } from "../../Contexts/DarkMode";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Home() {
  const { handleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container>
        <Switch colorScheme="green" className="dark-mode-switch" onChange={handleDarkMode} />
        <Content>
          <motion.div
            initial={{ opacity: 0, x: 700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="TextContainer"
          >
            <h1>
              <FaHamburger />
              Burger<span>Kenzie</span>
            </h1>
            <h2 className="HomeQuote">
              Aproveite a vida como se aproveita um <br /> <strong>Xis Gaúcho tri bom.</strong>
            </h2>

            <button onClick={() => navigate("/login")}>Venha pedir um lanche!</button>
          </motion.div>
        </Content>
      </Container>
    </motion.div>
  );
}
