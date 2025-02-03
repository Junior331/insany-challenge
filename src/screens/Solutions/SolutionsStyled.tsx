import styled from "styled-components";

export const GenericContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const Section = styled.section`
  width: 100%;
  min-height: 1155px;
  background-color: ${({ theme }) => theme.palette.color.auxiliary.white};
`;
