import styled from "styled-components";

export const RadioLabel = styled.label`
  gap: 8px;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_700};
`;

export const RadioInput = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.palette.color.brand.default};
`;
