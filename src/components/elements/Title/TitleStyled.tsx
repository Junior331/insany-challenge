import styled from "styled-components";

export const TitleContainer = styled.h2`
  text-align: start;
  font-size: ${({ theme }) => theme.typography.fontSizeBold}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_800};
`;

