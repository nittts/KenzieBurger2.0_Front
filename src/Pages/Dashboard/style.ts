import styled from "styled-components";

export const DashShowCaseContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  width: 100vw;
  height: 90vh;
  align-items: center;
  justify-content: space-evenly;

  overflow-x: scroll;
  overflow-y: none;

  @media screen and (max-width: 768px) {
    flex-flow: row nowrap;
  }

  @media screen and (max-width: 600px) {
    flex-flow: row nowrap;
  }
`;
