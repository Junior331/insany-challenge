import styled from "styled-components";

export const TextContainer = styled.p`
  text-align: start;
  font-size: ${({ theme }) => theme.typography.fontSizeRegular}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_300};
`;