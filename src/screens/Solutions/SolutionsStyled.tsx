import styled from "styled-components";

import {
  Text as TextComponent,
  Title as TitleComponent,
  Button as ButtonComponent,
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
  gap: 120px;
  display: flex;
  width: 100%;
  padding: 90px;
  min-height: 1155px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.color.auxiliary.white};

  @media (max-width: 1384px) {
    padding: 140px 30px 90px;
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
  }
`;

export const Text = styled(TextComponent)<styledProps>`
  max-width: 440px;
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_300};
  font-size: ${({ size, theme }) =>
    size || theme.typography.fontSizeRegular}rem;
`;

export const Title = styled(TitleComponent)<styledProps>`
  max-width: 440px;
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_800};
  font-size: ${({ size, theme }) => size || theme.typography.fontSizeBold}rem;
`;

export const ContainerTopic = styled(GenericContainer)`
  gap: 24px;
  margin: 16px 0 0;
  flex-direction: column;
`;

export const Topic = styled(GenericContainer)`
  gap: 16px;
  width: auto;
  align-items: center;
`;

export const Icon = styled.img``;

export const Button = styled(ButtonComponent)`
  height: 56px;
  max-width: 231px;
  margin: 18px 0 8px;

  @media (max-width: 1173px) {
    max-width: 100%;
  }
`;

export const FeaturesGrid = styled.div`
  gap: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
export const FeatureCard = styled.div`
  text-align: start;
  @media (max-width: 580px) {
    text-align: center;
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: #f5f8ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 16px;

  @media (max-width: 580px) {
    margin: 0 auto 16px;
  }
`;

export const FeatureTitle = styled.h3`
  color: #111;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const FeatureDescription = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  max-width: 268px;

  @media (max-width: 580px) {
    max-width: 100%;
  }
`;

export const ContainerCards = styled(GenericContainer)`
  width: auto;
  min-height: 608px;
  position: relative;

  @media (max-width: 1052px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ContainerCard = styled(GenericContainer)`
  gap: 15px;
  width: 100%;
  height: auto;
  overflow: hidden;
  max-width: 488px;
  min-height: 608px;
  border-radius: 6px;
  position: relative;
  padding-right: 55px;
  align-items: flex-end;
  flex-direction: column;
  background-size: cover;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-image: url(${getImage("bgCard").src});

  > img {
    z-index: 21;
  }

  &::after {
    left: 0;
    bottom: 0;
    width: 100%;
    content: "";
    height: 100%;
    position: absolute;
    background: linear-gradient(
      217deg,
      rgba(29, 99, 255, 0.1) 21.43%,
      rgba(29, 99, 255, 0) 126.66%
    );
  }
`;

export const CardBalance = styled(GenericContainer)`
  gap: 4px;
  z-index: 52;
  height: auto;
  left: -190px;
  bottom: 80px;
  width: 278px;
  display: flex;
  flex-shrink: 0;
  min-height: 185px;
  position: absolute;
  border-radius: 6px;
  background: #fff;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 15px 24px 24px;
  box-shadow: 0px 20px 30px -10px rgba(76, 74, 94, 0.15);

  h2 {
    gap: 5px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 1052px) {
    left: 29%;
    transform: translateX(-50%);
  }
`;

export const Divider = styled(GenericContainer)`
  width: 100%;
  height: 3px;
  opacity: 0.4;
  margin: 16px auto 12px;
  background-color: ${({ theme }) =>
    theme.palette.color.neutrals.light.gray_01};
`;

export const AvatarGroup = styled.div`
  display: flex;
  margin-top: 12px;

  img {
    width: 35px;
    height: 35px;
    margin-left: -8px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: #f2f5fc;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const Image = styled.img`
  min-width: 434px;
  min-height: 544px;
  border-radius: 6px;
  background-color: #f2f5fc;
`;

export const Circles = styled.img`
  right: 30px;
  bottom: 5px;
  position: absolute;
`;
