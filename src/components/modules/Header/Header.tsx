"use client";

import { useState } from "react";

import Link from "next/link";
import { Menu } from "../Menu";
import { routes } from "./utils";
import * as S from "./HeaderStyled";
import { getImage } from "@/assets/images";
import { Button, Text, Title } from "@/components/elements";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Container>
      <Link href="/">
        <S.ContainerLogo>
          <S.Image alt="Image logo" src={getImage("logo").src} />
          <S.ContainerText>
            <Text>Smart</Text>
            <Title>Money</Title>
          </S.ContainerText>
        </S.ContainerLogo>
      </Link>

      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <S.ContainerNav>
        <S.ContainerLinks>
          {routes.map((item) => (
            <S.Link href={item.path} key={item.id}>
              {item.label}
            </S.Link>
          ))}
        </S.ContainerLinks>
        <S.Button>Cadastre-se</S.Button>
      </S.ContainerNav>
    </S.Container>
  );
};
