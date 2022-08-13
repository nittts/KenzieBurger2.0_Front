import styled from "styled-components";

interface IinputContainer {
  borderColor: string;
  color: string;
}

export const InputContainer = styled.div<IinputContainer>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.15rem solid ${({ borderColor }) => borderColor};
  border-radius: 6px;
  color: ${({ color }) => color};
  width: 100%;
  padding-left: 0.5rem;
  height: 100%;

  svg {
    font-size: 1.5rem;
    margin-right: 2%;
  }

  input {
    padding: 0.8rem;
    background-color: transparent;
    outline: none;
    width: 100%;

    ::placeholder {
      color: ${({ color }) => color};
    }
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 3%;
`;

export const Label = styled.h3`
  position: absolute;
  top: -14%;
  left: 2%;
  padding: 0% 1%;
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.color[600]};
  color: ${({ theme }) => theme.color[900]};
`;

export const Error = styled.span`
  margin-top: 0.1rem;
  color: red;
  font-weight: 600;
  font-size: 0.8rem;
`;
