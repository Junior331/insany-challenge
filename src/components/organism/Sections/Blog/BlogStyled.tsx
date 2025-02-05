import styled from "styled-components";

import {
  Text as TextComponent,
  Title as TitleComponent,
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
  width: 100%;
  padding: 120px 90px;
  background-color: ${({ theme }) =>
    theme.palette.color.neutrals.light.gray_02};

  @media (max-width: 1025px) {
    padding: 64px 30px;
  }
`;

export const Text = styled(TextComponent)<styledProps>`
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_700};
  font-size: ${({ size, theme }) => size || theme.typography.fontSizeMedium}rem;
`;

export const Title = styled(TitleComponent)<styledProps>`
  max-width: 440px;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_800};
  font-size: ${({ size, theme }) => size || theme.typography.fontSizeBold}rem;
`;

export const Icon = styled.img``;

export const Container = styled.section`
  padding: 80px 24px;
  background: #f8f9fb;
  overflow: hidden;

  .swiper {
    overflow: visible;
    margin-top: 40px;
  }

  @media (max-width: 1173px) {
    padding: 40px 24px;
  }
`;

export const Header = styled.div`
  gap: 13px;
  display: flex;
  margin-bottom: 56px;
  flex-direction: column;

  @media (max-width: 1025px) {
    > h2:first-child {
      display: none;
    }

    > h2 {
      font-size: 2.3rem;
      text-align: center;
    }
  }
`;

export const Navigation = styled.div`
  gap: 10px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1025px) {
    display: none;
  }
`;

export const NavButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  transition: all 0.2s;
  justify-content: center;
  background-color: transparent;

  &:hover {
    background: #ffffff6a;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Card = styled.div`
  gap: 24px;
  height: 100%;
  height: auto;
  display: flex;
  cursor: pointer;
  max-width: 280px;
  overflow: hidden;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: fit-content;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 340px;
  object-fit: cover;
  background: #fff;

  @media (max-width: 768px) {
    object-fit: fill;
  }
`;

export const ImageAvatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: fill;
  border-radius: 50%;
  background: #fff;
`;

export const TitleBlue = styled(Title)`
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.color.brand.default};
`;

export const ContentCard = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderCard = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
`;

export const ContainerUser = styled.div`
  gap: 8px;
  display: flex;
  margin-top: 12px;
  align-items: center;
`;

export const ContainerText = styled.div``;

export const Pagination = styled.div`
  gap: 15px;
  display: flex;
  margin-top: 90px;
  justify-content: center;

  .swiper-pagination-bullet {
    margin: 0;
    opacity: 1;
    width: 10px;
    height: 10px;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s;
    background: #1d63ff;
    border: 1px solid #1d63ff;

    &-active {
      background: transparent;
      border-color: #1d63ff;
    }
  }
`;
