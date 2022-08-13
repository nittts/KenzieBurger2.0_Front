import { useEffect, useState } from "react";
import { Container } from "./styles";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <Container>
      <form onSubmit={(event) => handleUserInput(event)} className={width < 800 ? "open" : ""}>
        {open ? (
          <>
            <input
              type={"text"}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={"Insira o produto"}
            />
            <button
              onClick={() => {
                console.log(userInput);
              }}
            >
              <FaSearch />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              <FaSearch />
            </button>
          </>
        )}
      </form>
    </Container>
  );
}
