import styled from "styled-components";

import { styledProps } from "@/utils/types";
import {
  Text as TextComponent,
  Title as TitleComponent,
} from "@/components/elements";

export const GenericContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Container = styled(GenericContainer)`
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.color.auxiliary.white};

  > div:first-child,
  > footer {
    background-color: #080616;
  }
  > div:first-child {
    padding: 0 90px;
  }

  @media (max-width: 1173px) {
    padding: 0;
    > div:first-child {
      padding: 0 15px;
    }
  }
`;

export const Content = styled(GenericContainer)`
  width: 100%;
  flex: 1 0 280px;
  padding: 0 75px;
  flex-direction: column;

  figure {
    width: 100%;
    height: 434px;
    object-fit: fill;
    margin: 64px auto;
    max-width: 1045px;

    > div {
      width: 100%;
      height: 100%;
      > iframe {
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }

    @media (max-width: 1173px) {
      object-fit: cover;
    }
  }

  @media (max-width: 1173px) {
    padding: 0 30px;
  }
`;

export const Header = styled(GenericContainer)`
  gap: 16px;
  margin: 0 auto;
  max-width: 1045px;
  flex-direction: column;

  > h2 {
    margin-bottom: 13px;
  }
`;

export const Title = styled(TitleComponent)<styledProps>`
  color: #2c343e;
  font-size: ${({ size, theme }) =>
    size || theme.typography.fontSizeBold + 0.4}rem;

  strong {
    color: #2c343e;
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    font-size: ${({ theme }) => theme.typography.fontSizeBold + 0.4}rem;
  }
`;

export const Avatar = styled.img`
  width: 29px;
  height: 29px;
  border-radius: 4px;
  background-color: #f2f5fc;
`;

export const Tag = styled.label`
  gap: 10px;
  display: flex;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 2px;
  align-items: center;
  background: #0043d9;
  justify-content: center;
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #4a5568;
`;

export const AuthorImage = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Prefix = styled.span`
  color: #4a5568;
`;

export const AuthorName = styled.span`
  color: #596573;
  font-weight: 500;
`;

export const Dot = styled.span`
  width: 4px;
  height: 4px;
  margin: 0 8px;
  border-radius: 50%;
  background-color: #0043d9;
`;

export const Date = styled.span`
  color: #596573;
`;

export const Banner = styled.img`
  width: 100%;
  height: 434px;
  margin: 68px auto;
  object-fit: fill;
  max-width: 1008px;
  @media (max-width: 1173px) {
    object-fit: cover;
  }
`;

export const Image = styled(Banner)`
  height: 284px;
  max-width: 800px;
  margin: 64px auto;
  @media (max-width: 1173px) {
    object-fit: cover;
  }
`;

export const Text = styled(TextComponent)<styledProps>`
  width: 100%;
  color: #596573;
  font-size: ${({ size, theme }) =>
    size || theme.typography.fontSizeRegular}rem;
`;

export const Card = styled(GenericContainer)`
  max-width: 800px;
  padding: 32px 40px;
  border-radius: 6px;
  margin: 0 auto 24px;
  background: rgba(196, 201, 207, 0.2);
`;

export const ContainerTexts = styled(GenericContainer)`
  gap: 16px;
  max-width: 800px;
  margin: 20px auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerText = styled(GenericContainer)`
  gap: 18px;
  max-width: 800px;
  flex-direction: column;

  div {
    gap: 16px;
    display: flex;
    flex-direction: column;
  }
`;

export const List = styled.ul`
  gap: 34px;
  width: 100%;
  display: flex;
  max-width: 765px;
  flex-direction: column;
`;

export const Item = styled.li``;

export const Containerload = styled(GenericContainer)`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #00000096;
`;

export const Message = styled(Title)`
  width: 100%;
  display: flex;
  margin: 0 auto;
  color: #ccd0d5;
  max-width: 480px;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: -webkit-fill-available;
`;
