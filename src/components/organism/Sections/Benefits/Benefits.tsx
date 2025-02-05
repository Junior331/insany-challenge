"use client";
import { useState } from "react";

import { cards } from "./utils";
import * as S from "./BenefitsStyled";
import { theme } from "@/styles/theme";
import { getIcons } from "@/assets/icons";
import { getImage } from "@/assets/images";

export const Benefits = () => {
  const [progress] = useState(35);

  return (
    <S.Section id="Benefits">
      <S.Container>
        <S.Content>
          <S.Title size={4}>03 vantagens exclusivas da SmartMoney</S.Title>

          {cards.map((item) => (
            <S.Card key={item.id} $isPrimary={item.primary}>
              <S.Title
                color={
                  item.primary
                    ? theme.palette.color.neutrals.dark.dark_500
                    : theme.palette.color.neutrals.light.gray_01
                }
              >
                {item.title}
              </S.Title>
              <S.Text
                size={1.6}
                color={
                  item.primary
                    ? theme.palette.color.neutrals.dark.dark_300
                    : theme.palette.color.neutrals.light.gray_01
                }
              >
                {item.description}
              </S.Text>
              {item.primary && (
                <S.ProgressBarContainer>
                  <S.Progress
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </S.ProgressBarContainer>
              )}
            </S.Card>
          ))}
        </S.Content>

        <S.ContainerTechnologies>
          <a href="#Hero">
            <S.Button size="100%">Quero ser cliente</S.Button>
          </a>
          <S.ContainerCards >
            <S.ContainerCard $isSecondary>
              <S.Image
                loading="lazy"
                alt="Image avatar"
                src={getImage("avatarTechnologies").src}
              />
              <S.Icon src={getIcons("arrowLeftLine").src} alt="Icon arrow" />
            </S.ContainerCard>
            <S.ContainerCard>
              <S.Icon src={getIcons("arrowRightLine").src} alt="Icon arrow" />
              <S.Image
                loading="lazy"
                alt="Image avatar"
                src={getImage("db").src}
              />
            </S.ContainerCard>
          </S.ContainerCards>
        </S.ContainerTechnologies>
      </S.Container>
    </S.Section>
  );
};
