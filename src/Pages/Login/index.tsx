import { Container, Content } from "./styles";
import { motion } from "framer-motion";

import LoginContainer from "./LoginContainer";
import SideMenu from "./SideMenu";

export default function Login() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
    >
      <Container>
        <Content>
          <LoginContainer />
          <SideMenu />
        </Content>
      </Container>
    </motion.div>
  );
}
