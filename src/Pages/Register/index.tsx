import { Container, Content } from "./styles";
import { motion } from "framer-motion";

import RegisterContainer from "./RegisterContainer";
import SideMenu from "./SideMenu";

export default function Register() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
    >
      <Container>
        <Content>
          <SideMenu />
          <RegisterContainer />
        </Content>
      </Container>
    </motion.div>
  );
}
