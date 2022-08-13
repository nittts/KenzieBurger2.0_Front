import styled from "styled-components";

export const DashShowCaseContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  height: 90vh;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-flow: row nowrap;
    overflow-x: scroll;
    flex-grow: 1;
    flex-basis: 0;
    white-space: nowrap;
    justify-content: flex-start;
  }
`;
