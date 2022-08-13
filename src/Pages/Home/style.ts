import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-family: ${({ theme }) => theme.fontFamily};

  background: ${({ theme }) =>
    `linear-gradient(to left, ${theme.color[600]} 45%, ${theme.accentGreen.Primary} 35%)`};

  @media screen and (max-width: 970px) {
    background: ${({ theme }) =>
      `linear-gradient(to top, ${theme.color[600]} 45%, ${theme.accentGreen.Primary} 35%)`};
  }

  > .dark-mode-switch {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    top: 2vh;
    right: 2vw;
    position: absolute;
    color: ${({ theme }) => theme.color[900]};
    font-weight: bold;
  }
`;

export const Content = styled.div`
  width: 60%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 970px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-shadow: 8px 8px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: 0.1rem solid ${({ theme }) => theme.color[600]};

    background-color: ${({ theme }) => {
      return theme.color[600];
    }};

    h1 {
      display: flex;
      align-items: baseline;
      font-size: ${({ theme }) => theme.sizes.large};
      font-weight: bolder;
      color: ${({ theme }) => theme.color[900]};
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

    .HomeQuote {
      width: 100%;
      text-align: center;
      font-weight: 400;
      border-radius: 8px;
      padding: ${({ theme }) => theme.sizes.xsmall};
      color: ${({ theme }) => theme.color[900]};

      strong {
        color: ${({ theme }) => theme.color[900]};
      }
    }

    @media screen and (min-width: 970px) {
      flex-direction: column;
      width: 50%;
      height: 100%;
    }

    button {
      background-color: ${({ theme }) => theme.accentGreen.Dark};
      padding: ${({ theme }) => theme.sizes.xsmall};
      color: ${({ theme }) => theme.color[600]};
      border-radius: 8px;
      transition: 0.2s all;
      font-weight: bold;
      :hover {
        background-color: ${({ theme }) => theme.accentGreen.Light};
        color: ${({ theme }) => theme.color[600]};
      }

      :active {
        background-color: ${({ theme }) => theme.accentGreen.Primary};
      }
    }
  }
`;
