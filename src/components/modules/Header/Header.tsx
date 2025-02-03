import { SetStateAction, useState } from "react";
import * as S from "./HeaderStyled";
import { getImage } from "@/assets/images";
import { Button, Text, Title } from "@/components/elements";
import { routes } from "./utils";
import { Menu } from "../Menu/Menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Container>
      <S.ContainerLogo>
        <S.Image alt="Image logo" src={getImage("logo").src} />
        <S.ContainerText>
          <Text>Smart</Text>
          <Title>Money</Title>
        </S.ContainerText>
      </S.ContainerLogo>

      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <S.ContainerNav>
        <S.ContainerLinks>
          {routes.map((item) => (
            <S.Link key={item.id}>{item.label}</S.Link>
          ))}
        </S.ContainerLinks>
        <Button>Cadastre-se</Button>
      </S.ContainerNav>
    </S.Container>
  );
};
