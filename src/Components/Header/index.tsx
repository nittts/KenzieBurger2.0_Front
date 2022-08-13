import { FaHamburger } from "react-icons/fa";
import { Container, LogoContainer, Content } from "./style";
import { MdOutlineLogout } from "react-icons/md";
import CartIcon from "../CartIcon";
import SearchBar from "../SearchBar";
import { SetStateAction, useEffect, useState } from "react";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <Container>
      <LogoContainer>
        <h1>
          <FaHamburger />
          Burger<span>Kenzie</span>
        </h1>
      </LogoContainer>
      <Content>
        {width < 800 ? (
          <SearchBar />
        ) : (
          <>
            <SearchBar />
            <CartIcon />
            <MdOutlineLogout />
          </>
        )}
      </Content>
    </Container>
  );
}
