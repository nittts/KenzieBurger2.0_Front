import { useEffect, useState } from "react";
import { ClosedContainer, Container } from "./styles";
import { FaSearch } from "react-icons/fa";

interface ISearchProps {
  showProducts?: (input: string) => void;
}

export default function SearchBar({ showProducts }: ISearchProps) {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <Container>
          <form onSubmit={(event) => handleUserInput(event)}>
            <input
              type={"text"}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={"Insira o produto"}
            />
            <button
              onClick={() => {
                showProducts?.(userInput);
                setOpen(false);
              }}
            >
              <FaSearch />
            </button>
          </form>
        </Container>
      ) : (
        <ClosedContainer>
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            <FaSearch />
          </button>
        </ClosedContainer>
      )}
    </>
  );
}
