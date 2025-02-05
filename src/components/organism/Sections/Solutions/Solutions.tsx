"use client";

import { getIcons } from "@/assets/icons";
import * as S from "./SolutionsStyled";
import { topics, features } from "./utils";
import { getImage } from "@/assets/images";
import { useEffect } from "react";

export const Solutions = () => {
  return (
    <S.Section id="Solutions">
      <S.Container>
        <S.Content>
          <S.Title size={4}>Conheça nossas solução customizadas</S.Title>
          <S.Text>
            Suscipit pellentesque praesent auctor molestie massa nunc vitae
            felis eget est ut gravida in maecenas. Tempus in in in congue proin.
          </S.Text>

          <S.ContainerTopic>
            {topics.map((item) => (
              <S.Topic key={item.id}>
                <S.Icon src={item.icon} alt="Icon check" />
                <S.Text size={1.6}>{item.label}</S.Text>
              </S.Topic>
            ))}
          </S.ContainerTopic>

          <a href="#Hero">
            <S.Button size="100%">Quero ser cliente</S.Button>
          </a>

          <S.Topic>
            <S.Icon src={getIcons("phone").src} alt="Icon phone" />
            <S.Text size={1.6}>Fale conosco</S.Text>
          </S.Topic>
        </S.Content>

        <S.ContainerCards>
          <S.CardBalance>
            <S.Title size={2.4}>
              R$ 999,90
              <S.Icon src={getIcons("barChart").src} alt="Icon bar chart" />
            </S.Title>
            <S.Text size={1.8}>Balançaço</S.Text>
            <S.Divider />
            <S.AvatarGroup>
              {[1, 2, 3, 4].map((i) => (
                <img key={i} alt={`User ${i}`} src={getImage("avatar").src} />
              ))}
            </S.AvatarGroup>
          </S.CardBalance>
          <S.ContainerCard>
            <S.Icon src={getIcons("menu").src} alt="Icon menu" />

            <S.Image
              loading="lazy"
              alt="Image avatar"
              src={getImage("avatar").src}
            />
            <S.Circles
              loading="lazy"
              src={getImage("circles").src}
              alt="Image circles"
            />
          </S.ContainerCard>
        </S.ContainerCards>
      </S.Container>
      <S.FeaturesGrid>
        {features.map((item) => (
          <S.FeatureCard key={item.id}>
            <S.IconWrapper>
              <S.Icon src={item.icon} alt="Icon safe" />
            </S.IconWrapper>
            <S.FeatureTitle>{item.title}</S.FeatureTitle>
            <S.FeatureDescription>{item.label}</S.FeatureDescription>
          </S.FeatureCard>
        ))}
      </S.FeaturesGrid>
    </S.Section>
  );
};
