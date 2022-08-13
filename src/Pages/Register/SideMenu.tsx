import { SideMenu as Container } from "./styles";
import { FaHamburger } from "react-icons/fa";
import ShoppingBag from "../../Assets/ShoppingBag.svg";
import { SkeletonCircle } from "@chakra-ui/react";

export default function SideMenu() {
  const howMany = Array.from(Array(18).keys());

  return (
    <Container>
      <h1>
        <FaHamburger />
        Burger<span>Kenzie</span>
      </h1>
      <div className="quote">
        <img src={ShoppingBag} alt="Shopping Bag" />
        <p>
          A vida é como um sanduíche, é preciso <br /> recheá-la com os
          <strong> melhores </strong>
          <br />
          ingredientes.
        </p>
      </div>
      <div className="skeleton">
        {howMany.map((_, index) => {
          return <SkeletonCircle w={"0.7rem"} h={"0.7rem"} key={index} />;
        })}
      </div>
    </Container>
  );
}
