import styled from "styled-components";

interface ICartIconProps {
  counter: number;
}

export const Container = styled.div<ICartIconProps>`
  display: flex;
  font-size: 2rem;

  svg {
    color: ${({ theme }) => theme.color[800]};

    :hover {
      color: ${({ theme }) => theme.color[900]};
    }
  }

  .counterContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    .counter {
      text-align: center;
      position: absolute;
      padding: 0.25%;
      max-width: 2%;
      min-width: 2%;
      margin-left: 2%;
      margin-bottom: 1.5%;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.color[600]};
      background-color: ${({ theme }) => theme.accentGreen.Primary};
      border-radius: 25%;
      font-weight: bolder;

      @media (max-width: 1100px) {
        min-width: 3.5%;
        max-width: 3.5%;
        font-size: 0.5rem;
      }
    }
  }

  :hover {
    cursor: pointer;
  }
`;
