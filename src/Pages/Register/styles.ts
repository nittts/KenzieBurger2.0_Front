import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.color[900]};

  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.color[600]} 75%, ${theme.accentGreen.Primary} 15%)`};

  @media screen and (max-width: 970px) {
    background: ${({ theme }) =>
      `linear-gradient(to bottom, ${theme.color[600]} 15%, ${theme.accentGreen.Primary} 85%)`};
  }
`;

export const Content = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color[600]};

  @media screen and (max-width: 970px) {
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-flow: column-reverse;
  }
`;

export const RegisterContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .heading {
    display: flex;
    align-items: baseline;
    width: 100%;

    button {
      background-color: transparent;
      margin: 0;
      padding: 0;
      color: ${({ theme }) => theme.color[800]};
      font-weight: 400;
      text-decoration: underline;
      width: 60%;
      font-size: 0.8rem;

      :hover {
        background-color: transparent;
        color: ${({ theme }) => theme.color[900]};
      }
    }

    h2 {
      width: 100%;
      font-size: 1.3rem;
      margin-bottom: 3%;
      font-weight: bold;
      color: ${({ theme }) => theme.color[900]};
    }
  }

  > .ipt-container {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  button {
    width: 100%;
    height: 15%;
    margin: 5% 0%;
    background-color: ${({ theme }) => theme.accentGreen.Dark};
    padding: ${({ theme }) => theme.sizes.xsmall};
    color: ${({ theme }) => theme.color[900]};
    border-radius: 8px;
    transition: 0.2s all;
    font-weight: bold;
    background-color: ${({ theme }) => theme.color[700]};
    :hover {
      background-color: ${({ theme }) => theme.color[800]};
      color: ${({ theme }) => theme.color[600]};
    }

    :active {
      background-color: ${({ theme }) => theme.color[900]};
    }
  }
`;

export const RegisterContainer = styled.div`
  height: auto;
  padding: 2%;
  height: 100%;
  width: 40%;
  background-color: ${({ theme }) => theme.color[600]};
  border: 0.1rem solid ${({ theme }) => theme.color[700]};
  border-radius: 8px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 970px) {
    width: 100%;
    height: 100%;
  }
`;

export const SideMenu = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column nowrap;
  height: 70%;
  width: 55%;
  margin-bottom: 5%;
  padding: 2%;

  > .quote {
    width: 95%;
    display: flex;
    border-radius: 6px;
    border: 0.1rem solid ${({ theme }) => theme.color[700]};
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.15);
    padding: 2%;

    img {
      margin-right: 3%;
    }

    @media screen and (max-width: 970px) {
      width: 95%;
      align-self: center;
    }
  }

  h1 {
    display: flex;
    align-items: baseline;
    font-size: ${({ theme }) => theme.sizes.large};
    font-weight: bolder;
    color: ${({ theme }) => theme.color[900]};
    margin-bottom: 5%;
    svg {
      align-self: center;
      font-size: ${({ theme }) => theme.sizes.xlarge};
      color: ${({ theme }) => theme.accentGreen.Primary};
      animation: Rotate 1s linear infinite;
      margin-right: 0.3rem;

      @keyframes Rotate {
        from {
          transform: scale(1);
        }

        to {
          transform: scale(1.1);
        }
      }
    }

    span {
      margin-left: 0.2rem;
      font-size: ${({ theme }) => theme.sizes.small};
      font-weight: bold;
      color: ${({ theme }) => theme.accentRed.Primary};
    }
  }

  .skeleton {
    display: grid;
    grid-template-columns: 3rem 3rem 3rem 3rem 3rem 3rem;
    width: 75%;
    height: 35%;
    margin: 5% 2%;

    @media screen and (max-width: 970px) {
      display: none;
    }
  }

  @media screen and (max-width: 970px) {
    width: 100%;
    height: auto;
  }
`;
