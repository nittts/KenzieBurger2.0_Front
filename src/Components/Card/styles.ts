import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.fontFamily};
  color: black;
  font-size: 0.5em;

  margin: 0.5%;

  width: 21%;
  height: 45%;
  background-color: #f5f5f5;

  border: 0.2rem solid #dfdfdf;
  border-radius: 4px;

  :hover {
    border-color: ${({ theme }) => theme.accentGreen.Light};

    .Product-img {
      background-color: ${({ theme }) => theme.accentGreen.Light};
    }
  }

  .Product-img {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dfdfdf;
  }
  .Product-img img {
    height: 100%;
    width: 50%;
  }

  .prod-title,
  .rod-cat,
  .prod-price,
  button {
    font-family: "Lato";
    margin: 2%;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  .prod-title {
    margin: 5%;
    font-size: 1.7em;
    font-weight: 700;
  }

  .prod-cat {
    margin: 0% 5% 5% 5%;
    color: gray;
    font-size: 0.7rem;
  }

  .prod-price {
    margin: 0% 5%;
    font-weight: 700;
    color: #32b467;
    font-size: 1.5em;
  }

  button {
    width: 35%;

    border: none;
    border-radius: 8px;
    color: white;
    background-color: ${({ theme }) => theme.color[700]};
    padding: 2%;
    margin-top: 5%;
    margin-left: 5%;
    font-size: 0.7rem;
  }

  :hover {
    border: 0.2rem solid #32b467;
  }

  button:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.accentGreen.Primary};
  }

  @media only screen and (max-width: 1440px) {
    .prod-title {
      font-size: 2em;
    }

    .Product-img img {
      width: 55%;
    }
  }

  @media only screen and (max-width: 1100px) {
    .prod-title {
      font-size: 1.3em;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 95vw;
    height: 85vh;
    margin: 0 2.5vw;

    .prod-cat {
      font-weight: lighter;
      font-size: 1.5em;
    }

    .Product-img {
      width: 93.5vw;
    }

    .Product-img img {
      width: 45%;
    }

    .prod-title {
      font-size: 3em;
    }

    .prod-price {
      font-size: 2em;
    }
  }

  @media only screen and (max-width: 475px) {
    width: 95vw;
    height: 70vh;
    margin: 0 2.5vw;

    .prod-cat {
      font-weight: lighter;
      font-size: 1.5em;
    }

    .Product-img {
      width: 93.5vw;
    }

    .Product-img img {
      width: 70%;
    }

    .prod-title {
      font-size: 3em;
    }

    .prod-price {
      font-size: 2em;
    }
  }

  @media only screen and (max-width: 375px) {
    height: 55vh;

    .Product-img img {
      width: 50%;
    }

    .prod-title {
      font-size: 2.5em;
    }
  }
`;
