import styled from "styled-components";

export const Container = styled.div`
  margin: 2%;
  display: flex;
  width: 90%;
  background-color: ${(props) => props.theme.color[600]};
  border-radius: 8px;
  box-shadow: 10px 10px 5px 1px rgba(0, 0, 0, 0.25);
  transition: 0.5s;

  :hover {
    background-color: ${(props) => props.theme.color[700]};

    img {
      filter: blur(5px);
    }
  }

  img {
    width: 25%;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.color[700]};
    img {
      border-color: ${(props) => props.theme.color[700]};
      width: 100%;
    }

    div {
      border-left: none;
      border-top: 0.2rem solid ${(props) => props.theme.color[900]};
      display: flex;
      align-items: center;
    }
  }
`;

export const Content = styled.div`
  padding-left: 2%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  border-left: 0.2rem solid ${(props) => props.theme.color[900]};

  @media (max-width: 768px) {
    text-align: center;
    padding-left: 0%;
  }

  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.color[900]};
  }

  p {
    font-style: italic;
    font-size: 1.5rem;
    color: ${(props) => props.theme.color[800]};
  }

  span {
    margin-top: 5%;
    color: ${(props) => props.theme.accentGreen.Primary};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    width: 30%;
    padding: 1rem;
    font-weight: bolder;
    color: ${(props) => props.theme.color[900]};
    background-color: ${(props) => props.theme.accentGreen.Primary};
    font-size: 1rem;
    margin: 1% 0%;
    :hover {
      background-color: ${(props) => props.theme.accentGreen.Light};
      box-shadow: 1px 1px 5px 1px ${(props) => props.theme.accentGreen.Light};
    }

    :active {
      background-color: ${(props) => props.theme.accentGreen.Dark};
      box-shadow: 1px 1px 5px 1px ${(props) => props.theme.accentGreen.Dark};
    }
  }
`;
