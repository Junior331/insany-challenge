import styled from "styled-components";

import {
  Text as TextComponent,
  Title as TitleComponent,
} from "@/components/elements";
import { styledProps } from "./@types";
import { getImage } from "@/assets/images";

export const GenericContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Section = styled.section`
  width: 100%;
  padding: 0 90px;
  margin-top: 15px;
  min-height: 760px;
  margin-bottom: -50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${getImage("bgHome").src});

  @media (max-width: 935px) {
    padding: 0 3%;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
    margin-bottom: 0px;
  }
`;

export const Container = styled.div`
  gap: 64px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1385px) {
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

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Tag = styled(GenericContainer)`
  gap: 8px;
  width: auto;
  display: flex;
  align-items: center;
  border-radius: 4rem;
  max-width: max-content;
  border: 2px solid #1d1b38;
  padding: 10px 20px 10px 16px;
`;

export const Icon = styled.img``;

export const Text = styled(TextComponent)`
  color: ${({ theme }) => theme.palette.color.auxiliary.white};
  font-size: ${({ theme }) => theme.typography.fontSizeMedium}rem;
`;

export const Title = styled(TitleComponent)<styledProps>`
  color: ${({ theme }) => theme.palette.color.auxiliary.white};
  font-size: ${({ size, theme }) => size || theme.typography.fontSizeBold}rem;
`;

export const ContentHero = styled(GenericContainer)`
  flex-direction: column;

  > p {
    font-size: 1.8rem;
  }

  > h2 {
    margin-bottom: 13px;
  }

  @media (max-width: 768px) {
    > h2,
    p {
      text-align: center;
    }

    > p {
      margin: 0 auto;
      font-size: 1.6rem;
    }
  }
`;

export const Divider = styled(GenericContainer)`
  width: 32px;
  height: 2px;
  margin: 56px 0;
  background-color: ${({ theme }) => theme.palette.color.brand.default};

  @media (max-width: 768px) {
    margin: 56px auto;
  }
`;

export const ContainerBigNumbers = styled(GenericContainer)`
  row-gap: 64px;
  flex-wrap: wrap;
`;

export const BigNumber = styled(GenericContainer)`
  gap: 6px;
  width: auto;
  flex: 1 0 200px;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ContainerForm = styled(GenericContainer)`
  z-index: 10;
  width: 488px;
  height: 644px;
  border-radius: 6px;
  margin-bottom: -60px;
  box-shadow: 0px 30px 50px -10px rgba(76, 74, 94, 0.2);
  background: ${({ theme }) => theme.palette.color.auxiliary.white};
`;
