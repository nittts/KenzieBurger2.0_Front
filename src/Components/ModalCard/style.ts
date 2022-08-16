import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5%;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 22%;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color[600]};
    height: 5rem;
    img {
      width: 70%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 5rem;

  padding-left: 2%;

  > div {
    height: 100%;
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.2rem;
      font-weight: bold;
    }

    svg {
      color: ${({ theme }) => theme.color[700]};

      :hover {
        cursor: pointer;
        fill: ${({ theme }) => theme.color[800]};
      }
    }
  }
`;

export const Counter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color[600]};
  width: 30%;
  border-radius: 2px;

  .minus {
    margin: 2% 2% 0% 10%;
  }

  .plus {
    margin: 2% 10% 0% 2%;
  }

  .minus,
  .plus {
    color: red;
    font-weight: bold;

    :hover {
      cursor: pointer;
    }
  }

  p {
    background-color: white;
    width: 40%;
    text-align: center;
  }
`;
