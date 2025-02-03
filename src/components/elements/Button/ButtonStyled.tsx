import styled, { css } from "styled-components";
import { StyledButtonProps } from "./@types";

export const Button = styled.button<StyledButtonProps>`
  border: none;
  height: 40px;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-radius: 0.7rem;
  justify-content: center;
  transition: 0.2s color ease;
  width: ${({ size }) => size || "max-content"};
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
  font-size: ${({ theme }) => theme.typography.fontSize - 0.2}rem;
  background: ${({ theme }) => theme.palette.color.auxiliary.white};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_700};
`;
