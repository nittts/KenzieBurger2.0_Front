import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;

  font-family: "Inter";
`;

export const Content = styled.div`
  width: 30%;
  background-color: white;
  border-radius: 8px;

  @media screen and (max-width: 900px) {
    width: 90%;
  }

  header {
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: space-between;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background-color: ${({ theme }) => theme.accentGreen.Primary};
    padding: 0% 3%;
    font-weight: bold;
    color: white;

    > span {
      color: rgba(255, 255, 255, 0.5);

      :hover {
        cursor: pointer;
      }
    }
  }

  .cart-container {
    height: 7rem;
    padding: 2%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  article {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    padding: 2%;

    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4% 2%;
      border-top: 0.2rem solid ${({ theme }) => theme.color[700]};
      font-weight: 700;

      span {
        font-weight: 400;
        color: ${({ theme }) => theme.color[800]};
      }
    }

    button {
      width: 100%;
      padding: 1rem;
      background-color: ${({ theme }) => theme.color[700]};
      border-radius: 8px;
      color: ${({ theme }) => theme.color[800]};

      :hover {
        background-color: ${({ theme }) => theme.color[900]};
        color: ${({ theme }) => theme.color[600]};
      }
    }
  }
`;

export const EmptyCart = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;

  h2,
  p {
    text-align: center;
  }

  h2 {
    font-weight: bold;
    font-size: 1.2rem;
  }

  p {
    margin-top: 1%;
    font-size: 0.9rem;
  }

  .empty-cart {
    padding: 10%;
  }
`;
