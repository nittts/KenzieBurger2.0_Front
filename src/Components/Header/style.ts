import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  padding: 0% 2%;

  background-color: ${({ theme }) => theme.color[600]};
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  svg {
    font-size: 2rem;
    margin: 0% 4%;
    color: ${({ theme }) => theme.color[800]};

    :hover {
      color: ${({ theme }) => theme.color[900]};
    }
  }
`;
export const LogoContainer = styled.div`
  width: 40%;

  h1 {
    display: flex;
    align-items: baseline;
    font-size: ${({ theme }) => theme.sizes.medium};
    font-weight: bolder;
    color: ${({ theme }) => theme.color[900]};
    svg {
      align-self: center;
      font-size: ${({ theme }) => theme.sizes.large};
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
`;
