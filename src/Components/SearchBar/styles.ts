import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin-right: 2%;
  background-color: #fff;

  form {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    border: 3px solid ${({ theme }) => theme.color[700]};
    border-radius: 8px;
    width: 100%;
  }

  form input {
    background-color: transparent;
    border: none;
    border-radius: 4px;
    width: 100%;
    padding: 2.5%;
  }

  form input:focus {
    outline: none;
    caret-color: ${({ theme }) => theme.accentGreen.Primary};
  }

  form:hover {
    border: 3px solid ${({ theme }) => theme.accentGreen.Light};
  }

  form button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.accentGreen.Primary};
    padding: 2%;
    margin-right: 5%;
    width: 10%;
    height: 100%;

    border: none;
    border-radius: 8px;

    color: white;
    font-weight: 700;

    svg {
      font-size: 1rem;
      color: ${({ theme }) => theme.color[600]};
    }
  }

  form button:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.accentGreen.Light};
  }

  .open {
    background-color: #fff;
    z-index: 2;
    position: absolute;
    top: 2vh;
    left: 2vw;
    width: 95vw;
  }
`;
