import { motion } from "framer-motion";
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
  gap: 120px;
  width: 100%;
  display: flex;
  min-height: 994px;
  padding: 120px 90px;
  flex-direction: column;

  @media (max-width: 1025px) {
    padding: 64px 30px;
  }
`;

export const Container = styled.div`
  gap: 64px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1173px) {
    justify-content: center;
  }
`;

export const Content = styled(GenericContainer)`
  gap: 24px;
  width: auto;
  display: flex;
  max-width: 652px;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1173px) {
    align-items: center;

    > h2 {
      font-size: 2.3rem;
      text-align: center;
    }
  }
`;

export const Card = styled(motion.div)<styledProps>`
  gap: 17px;
  width: 100%;
  display: flex;
  max-width: 487px;
  padding: 33px 34px;
  border-radius: 6px;
  flex-direction: column;
  align-items: flex-start;

  ${({ $isPrimary }) =>
    $isPrimary &&
    css`
      background-color: ${({ theme }) => theme.palette.color.auxiliary.white};
    `}
`;

export const Text = styled(TextComponent)<styledProps>`
  color: ${({ color, theme }) => color || theme.palette.color.auxiliary.white};
  font-size: ${({ size, theme }) =>
    size || theme.typography.fontSizeRegular}rem;
`;

export const Title = styled(TitleComponent)<styledProps>`
  max-width: 500px;
  color: ${({ color, theme }) => color || theme.palette.color.auxiliary.white};
  font-size: ${({ size, theme }) => size || theme.typography.fontSizeBold}rem;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  overflow: hidden;
  border-radius: 5px;
  background: #e0e0e0;
`;

export const Progress = styled(motion.div)`
  height: 100%;
  border-radius: 30px;
  background: #1e90ff;
`;

export const Icon = styled.img``;

export const Button = styled(ButtonComponent)`
  height: 56px;
  max-width: 595px;
  margin: 18px 0 8px;

  @media (max-width: 1025px) {
    margin: 18px auto 8px;
  }
`;

export const ContainerTechnologies = styled(GenericContainer)`
  gap: 70px;
  width: auto;
  min-height: 608px;
  position: relative;
  align-items: flex-end;
  flex-direction: column;

  @media (max-width: 1052px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  a {
    width: 100%;
    max-width: 263px;
  }
  @media (max-width: 1173px) {
    a {
      max-width: 100%;
    }
  }
`;

export const ContainerCards = styled(GenericContainer)<{ scale?: number }>`
  gap: 29px;
  width: auto;
  @media (max-width: 600px) {
    transform: scale(0.9);
  }
  @media (max-width: 530px) {
    transform: scale(0.8);
  }
  @media (max-width: 470px) {
    transform: scale(0.65);
  }
  @media (max-width: 386px) {
    transform: scale(0.5);
  }
`;

export const ContainerCard = styled(GenericContainer)<styledProps>`
  gap: 39px;
  width: 100%;
  height: auto;
  max-width: 282px;
  overflow: hidden;
  border-radius: 6px;
  flex-direction: column;
  align-items: flex-start;

  ${({ $isSecondary }) =>
    $isSecondary &&
    css`
      align-items: flex-end;
    `}
`;

export const Divider = styled(GenericContainer)`
  width: 100%;
  height: 3px;
  opacity: 0.4;
  margin: 16px auto 12px;
  background-color: ${({ theme }) =>
    theme.palette.color.neutrals.light.gray_01};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  min-width: 282px;
  max-width: 282px;
  max-height: 402px;
  object-fit: cover;
  min-height: 402px;
  border-radius: 6px;
  background-color: #f2f5fc;
`;
