import styled from "styled-components";

export const GenericContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Container = styled(GenericContainer)`
  > div:first-child {
    background-color: #080616;
  }
`;
