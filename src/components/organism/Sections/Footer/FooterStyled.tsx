import styled from "styled-components";

import { getImage } from "@/assets/images";

import {
  Text as TextComponent,
  Title as TitleComponent,
  Button as ButtonComponent,
} from "@/components/elements";
import { styledProps } from "@/utils/types";
import {
  ContainerLogo as ContainerLogoHeader,
  ContainerText as ContainerTextHeader,
} from "@/components/modules/Header/HeaderStyled";

export const Container = styled.footer`
  width: 100%;
  padding: 0 90px;
  margin-top: 15px;
  min-height: 586px;
  align-items: center;
  margin-bottom: -50px;
  background-size: cover;
  justify-content: center;
  padding: 115px 90px 50px;
  background-repeat: no-repeat;
  background-image: url(${getImage("bgFooter").src});

  @media (max-width: 1173px) {
    padding: 63px 30px 32px;
  }
`;

export const Content = styled.div`
  gap: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1173px) {
    gap: 48px;
    grid-template-columns: 1fr;
  }
`;

export const NewsletterSection = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    > h2,
    p {
      text-align: center;
    }
  }
`;

export const Icon = styled.img`
  width: max-content;
  margin-bottom: 16px;
`;

export const Text = styled(TextComponent)<styledProps>`
  color: ${({ theme }) => theme.palette.color.auxiliary.white};
  font-size: ${({ size, theme }) => size || theme.typography.fontSizeMedium}rem;
`;

export const Title = styled(TitleComponent)<styledProps>`
  color: ${({ theme }) => theme.palette.color.auxiliary.white};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ size, theme }) => size || theme.typography.fontSizeBold}rem;
`;

export const Form = styled.form`
  gap: 8px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 0 16px;
  margin-top: 16px;
  max-width: 486px;
  border-radius: 6px;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.color.auxiliary.white};

  @media (max-width: 1173px) {
    padding: 0;
    flex-direction: column;
    background-color: transparent;
  }
`;

export const Input = styled.input`
  border: none;
  height: auto;
  outline: none;
  flex: 1 0 auto;
  padding: 12px 0;
  min-height: 64px;

  color: ${({ theme }) => theme.palette.color.auxiliary.black};
  font-size: ${({ theme }) => theme.typography.fontSizeMedium}rem;

  &::placeholder {
    color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_50};
  }

  @media (max-width: 1173px) {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.palette.color.auxiliary.white};
  }
`;

export const Button = styled(ButtonComponent)`
  padding: 12px 24px;

  @media (max-width: 1173px) {
    width: 100%;
    height: 56px;
  }
`;

export const LinksSection = styled.div`
  gap: 48px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    gap: 32px;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.palette.color.auxiliary.white};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const LinksList = styled.ul`
  gap: 24px;
  padding: 0;
  display: flex;
  list-style: none;
  flex-direction: column;

  li {
    a {
      text-decoration: none;
      transition: color 0.2s;
      color: ${({ theme }) => theme.palette.color.auxiliary.white};
      font-size: ${({ theme }) => theme.typography.fontSizeMedium}rem;

      &:hover {
        color: ${({ theme }) => theme.palette.color.brand.light};
      }
    }
  }

  @media (max-width: 1173px) {
    gap: 32px;
    flex-wrap: wrap;
    flex-direction: row;
    li {
      flex: 1 0 140px;
    }
  }
`;

export const SocialList = styled(LinksList)`
  li {
    gap: 8px;
    display: flex;
    align-items: center;
    img {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1173px) {
    li {
      flex: initial;
      width: max-content;
      a {
        display: none;
      }
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  padding-top: 24px;
  align-items: center;
  margin: 64px auto 0;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1173px) {
    gap: 24px;
    flex-wrap: wrap;
  }
`;

export const ContainerLogo = styled(ContainerLogoHeader)`
  gap: 10px;
`;

export const Image = styled.img``;

export const ContainerText = styled(ContainerTextHeader)`
  > p {
    color: ${({ theme }) => theme.palette.color.neutrals.light.gray_01};
  }
  > h2 {
    color: ${({ theme }) => theme.palette.color.auxiliary.white};
  }
`;

export const LanguageSelect = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.color.auxiliary.white};

  > img {
    margin-bottom: 0;
  }

  > p {
    color: ${({ theme }) => theme.palette.color.neutrals.light.gray_01};
  }
`;

export const Credits = styled(Text)`
  gap: 3px;
  display: flex;
  align-items: center;

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.palette.color.auxiliary.white};
  }
`;
