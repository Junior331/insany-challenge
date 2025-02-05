import styled, { css } from "styled-components";

import {
  Text as TextComponent,
  Title as TitleComponent,
  Button as ButtonComponent,
} from "@/components/elements";
import { styledProps } from "@/utils/types";

export const GenericContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Section = styled.section`
  gap: 32px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 64px 24px;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.palette.color.auxiliary.white};

  @media (max-width: 1173px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  gap: 32px;
  display: flex;
  max-width: 466px;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerIcon = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  border-radius: 64px;
  justify-content: center;
  background: linear-gradient(
    217deg,
    rgba(29, 99, 255, 0.1) 21.43%,
    rgba(29, 99, 255, 0) 126.66%
  );
`;

export const Icon = styled.img``;

export const Text = styled(TextComponent)<styledProps>`
  text-align: center;
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_200};
  font-size: ${({ theme }) => theme.typography.fontSizeMedium}rem;
`;

export const Title = styled(TitleComponent)<styledProps>`
  max-width: 320px;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSizeBold}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_800};
`;

export const Button = styled(ButtonComponent)<styledProps>`
  height: 56px;
  display: flex;
  padding: 16px 56px;
  border-radius: 6px;

  ${({ $isSecondary }) =>
    $isSecondary &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.palette.color.brand.default};
      border: 1px solid ${({ theme }) => theme.palette.color.brand.default};
      
      &:hover {
        color: ${({ theme }) => theme.palette.color.auxiliary.white};
        background: ${({ theme }) => theme.palette.color.brand.default};
      }
    `}
`;

export const Divider = styled.div`
  width: 4px;
  opacity: 0.3;
  align-self: stretch;
  background-color: ${({ theme }) =>
    theme.palette.color.neutrals.light.gray_01};

  @media (max-width: 1173px) {
    width: 100%;
    height: 4px;
  }
`;
