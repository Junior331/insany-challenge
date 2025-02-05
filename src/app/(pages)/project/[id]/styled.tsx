import styled from "styled-components";

import { styledProps } from "@/utils/types";
import { Title as TitleComponent } from "@/components/elements";

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

  .ContainerText {
    gap: 18px;
    width: 100%;
    height: auto;
    display: flex;
    margin: 0 auto;
    margin-top: 68px;
    max-width: 1045px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    div {
      gap: 16px;
      display: flex;
      flex-direction: column;
    }

    p {
      color: #596573;
      font-size: ${({ theme }) => theme.typography.fontSizeRegular}rem;
    }
    h2 {
      color: #2c343e;
      font-size: ${({ theme }) => theme.typography.fontSizeBold + 0.4}rem;
    }
    img,
    figure {
      width: 100%;
      height: 434px;
      margin: 64px auto;
      object-fit: fill;
      max-width: 1045px;

      > div {
        width: 100%;
        height: 100%;
        > iframe {
          width: 100%;
          height: 100%;
        }
      }

      @media (max-width: 1173px) {
        object-fit: cover;
      }
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
