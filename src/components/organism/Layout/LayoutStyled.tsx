import styled from 'styled-components';

export const genericDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;
export const LayoutContainer = styled(genericDiv)``;

export const LayoutContent = styled(genericDiv)`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Content = styled(genericDiv)`
  align-items: center;
  flex-direction: column;
`;
