/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import * as S from "./SolutionsStyled";
import { getIcons } from "@/assets/icons";
import { formatter } from "@/utils/utils";
import { topics, features, imagesCarousel } from "./utils";
import { getImage, images } from "@/assets/images";

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
              {formatter({
                type: "pt-BR",
                currency: "BRL",
                style: "currency",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(999.9 || 0)}
              <S.Icon src={getIcons("barChart").src} alt="Icon bar chart" />
            </S.Title>
            <S.Text size={1.8}>Balançaço</S.Text>
            <S.Divider />
            <S.AvatarGroup>
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  alt={`User ${i}`}
                  src={images[`avatar0${i}` as keyof typeof images].src}
                />
              ))}
            </S.AvatarGroup>
          </S.CardBalance>
          <S.ContainerCard>
            <S.Pagination className="pagination_images" />
            <Swiper
              loop
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{
                clickable: false,
                el: ".pagination_images",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
            >
              {imagesCarousel.map((item) => (
                <SwiperSlide className="SwiperSlide" key={item.id}>
                  <S.Image
                    loading="lazy"
                    alt="Image avatar"
                    src={item.img || getImage("fallback").src}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

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
