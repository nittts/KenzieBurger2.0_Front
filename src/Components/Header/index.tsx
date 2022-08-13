import { FaHamburger } from "react-icons/fa";
import { Container, LogoContainer, Content } from "./style";
import { MdOutlineLogout } from "react-icons/md";
import CartIcon from "../CartIcon";
import SearchBar from "../SearchBar";
import { useAuth } from "../../Contexts/Authorization";

interface IHeaderProps {
  showProducts?: (input: string) => void;
}

export default function Header({ showProducts }: IHeaderProps) {
  const { logOut } = useAuth();

  return (
    <Container>
      <LogoContainer>
        <h1>
          <FaHamburger />
          Burger<span>Kenzie</span>
        </h1>
      </LogoContainer>
      <Content>
        <SearchBar showProducts={showProducts} />
        <CartIcon />
        <MdOutlineLogout onClick={logOut} />
      </Content>
    </Container>
  );
}
