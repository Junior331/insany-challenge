import styled from "styled-components";
import { Button as ButtonComponent } from "@/components/elements";

export const ContainerGeneric = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled(ContainerGeneric)`
  width: 100%;
  height: 80px;
  position: relative;
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const ContainerLogo = styled(ContainerGeneric)`
  gap: 10px;
`;

export const Image = styled.img``;

export const ContainerText = styled(ContainerGeneric)`
  > p {
    color: #cecdd9;
    font-size: 25px;
  }
  > h2 {
    color: #fff;
  }
`;

export const ContainerNav = styled(ContainerGeneric)`
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerLinks = styled(ContainerGeneric)`
  gap: 20px;
`;

export const Link = styled.a`
  color: #fff;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizeMedium}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};

  &:hover::after {
    left: 0;
    width: 100%;
  }

  &::after {
    width: 0;
    left: 50%;
    content: "";
    height: 2px;
    bottom: -5px;
    position: absolute;
    background-color: #fff;
    transition: width 0.3s ease, left 0.3s ease;
  }

  @media (max-width: 768px) {
    color: #fff;
    font-size: ${({ theme }) => theme.typography.fontSizeBold}rem;

    &::after {
      background-color: #fff;
    }
  }
`;

export const Button = styled(ButtonComponent)`
  background: ${({ theme }) => theme.palette.color.auxiliary.white};
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_700};

  &:hover {
    background-color: #e8ecf5;
  }
`;
