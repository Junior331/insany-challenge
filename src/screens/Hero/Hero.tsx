"use client";

import * as S from "./HeroStyled";
import { getIcons } from "@/assets/icons";
import { Header, NumberTicker } from "@/components/modules";
import { bigNumbers } from "./utils";

export const Hero = () => {
  return (
    <S.Section id="Hero">
      <Header />

      <S.Container>
        <S.Content>
          <S.Tag>
            <S.Icon src={getIcons("star").src} alt="Icon star" />
            <S.Text>Tecnologia disruptiva</S.Text>
          </S.Tag>

          <S.ContentHero>
            <S.Title size={5.6}>
              Conta digital que não é só uma conta digital.{" "}
            </S.Title>
            <S.Text>
              Pellentesque rutrum turpis non est turpis pretium morbi urna.
            </S.Text>

            <S.Divider />

            <S.ContainerBigNumbers>
              {bigNumbers.map((item) => (
                <S.BigNumber key={item.id}>
                  <NumberTicker targetNumber={item.value} duration={2} />
                  <S.Text>{item.label}</S.Text>
                </S.BigNumber>
              ))}
            </S.ContainerBigNumbers>
          </S.ContentHero>
        </S.Content>

        <S.ContainerForm></S.ContainerForm>
      </S.Container>
    </S.Section>
  );
};
