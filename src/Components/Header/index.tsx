import { FaHamburger } from "react-icons/fa";
import { Container, LogoContainer, Content } from "./style";
import { MdOutlineLogout } from "react-icons/md";
import CartIcon from "../CartIcon";
import SearchBar from "../SearchBar";
import { useAuth } from "../../Contexts/Authorization";
import { useNavigate } from "react-router-dom";
import { Product } from "../../@Types/CartProvider";

interface IHeaderProps {
  showProducts?: (input: string) => void;
  handleModal: () => void;
}

export default function Header({ showProducts, handleModal }: IHeaderProps) {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <LogoContainer
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <h1>
          <FaHamburger />
          Burger<span>Kenzie</span>
        </h1>
      </LogoContainer>
      <Content>
        <SearchBar showProducts={showProducts} />
        <CartIcon handleModal={handleModal} />
        <MdOutlineLogout onClick={logOut} />
      </Content>
    </Container>
  );
}
