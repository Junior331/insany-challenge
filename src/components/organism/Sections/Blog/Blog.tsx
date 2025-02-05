"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import * as S from "./BlogStyled";
import { getIcons } from "@/assets/icons";
import { getImage } from "@/assets/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRouter } from "next/navigation";

export const Blog = () => {
  const router = useRouter();

  return (
    <S.Section id="Blog">
      <S.Header>
        <S.TitleBlue>Nosso blog</S.TitleBlue>
        <S.Title size={4}>Notícias do mundo da tecnologia</S.Title>
        <S.Navigation>
          <S.NavButton className="prev-button" aria-label="Previous slide">
            <S.Icon src={getIcons("arrowLeft").src} alt="Icon arrow left" />
          </S.NavButton>
          <S.NavButton className="next-button" aria-label="Next slide">
            <S.Icon src={getIcons("arrowRight").src} alt="Icon arrow right" />
          </S.NavButton>
        </S.Navigation>
      </S.Header>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView="auto"
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        pagination={{
          clickable: true,
          el: ".pagination",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 31,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 31,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 31,
          },
          1444: {
            slidesPerView: 5,
            spaceBetween: 31,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_i, index) => (
          <SwiperSlide key={index}>
            <S.Card onClick={() => router.push(`/project/1`)}>
              <S.Image src={getImage("avatar").src} alt="Image avatar" />

              <S.ContentCard>
                <S.HeaderCard>
                  <S.TitleBlue size={1.6}>Business</S.TitleBlue>
                  <S.Text size={1.6}>Outubro 2021 </S.Text>
                </S.HeaderCard>
                <S.Text>
                  Sollicitudin a sagittis, risus nisl, fermentum, tincidunt
                  dolor
                </S.Text>

                <S.ContainerUser>
                  <S.ImageAvatar
                    src={getImage("avatar").src}
                    alt="Image avatar"
                  />
                  <S.ContainerText>
                    <S.Text>Savannah Nguyen</S.Text>
                    <S.Text>Autor</S.Text>
                  </S.ContainerText>
                </S.ContainerUser>
              </S.ContentCard>
            </S.Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <S.Pagination className="pagination" />
    </S.Section>
  );
};
