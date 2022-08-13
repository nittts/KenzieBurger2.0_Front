import { Container, Content } from "./styles";
import { motion } from "framer-motion";

import LoginContainer from "./LoginContainer";
import SideMenu from "./SideMenu";

export default function Login() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container>
        <Content>
          <LoginContainer />
          <SideMenu />
        </Content>
      </Container>
    </motion.div>
  );
}
