"use client";

import * as S from "./styled";
import { getImage } from "@/assets/images";
import { breadcrumbItems, texts } from "./utils";
import { Sections } from "@/components/organism";
import { Breadcrumb, Header } from "@/components/modules";

export default function Project() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Breadcrumb items={breadcrumbItems} />

        <S.Header>
          <S.Tag>Desenvolvimento</S.Tag>
          <S.Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo
            dui nec dolor ut commodo dui nec ipsum
          </S.Title>

          <S.ContainerUser>
            <S.Avatar
              alt="Image avatar"
              style={{ objectFit: "cover" }}
              src={getImage("avatar").src}
            />
            <S.AuthorInfo>
              <S.Prefix>Por</S.Prefix>
              <S.AuthorName>Luis henrique silva</S.AuthorName>
              <S.Dot />
              <S.Date>5 de ago 2021</S.Date>
            </S.AuthorInfo>
          </S.ContainerUser>
        </S.Header>

        <S.Banner alt="Image logo" src={getImage("avatarDetail").src} />
        <S.Card>
          <S.Text>
            Você já ouviu falar na utilização de manual de atendimento ao
            cliente na advocacia? É um documento que aborda os principais pontos
            de dúvida do relacionamento do cliente com o advogado ou escritório
            e que visa esclarecer, desde já, como esse relacionamento irá
            funcionar.
          </S.Text>
        </S.Card>

        <S.ContainerTexts>
          {texts.map((item) => (
            <S.ContainerText key={item.id}>
              <S.Title>{item.title}</S.Title>
              <div>
                {item.texts.map((text, index) => (
                  <S.Text key={index}>{text}</S.Text>
                ))}
              </div>
            </S.ContainerText>
          ))}
          <S.List>
            <S.Item>Lorem ipsum dolor sit amet</S.Item>
            <S.Item>In mauris malesuada nisl laoreet</S.Item>
            <S.Item>Lorem ipsum dolor </S.Item>
            <S.Item>In mauris malesuada nisl</S.Item>
            <S.Item>In mauris malesuada nisl laoreet</S.Item>
          </S.List>
        </S.ContainerTexts>
        <S.Image alt="Image logo" src={getImage("abstract").src} />
        <S.ContainerTexts>
          {[...texts].splice(0, 2).map((item) => (
            <S.ContainerText key={item.id}>
              <S.Title>{item.title}</S.Title>
              <div>
                {item.texts.map((text, index) => (
                  <S.Text key={index}>{text}</S.Text>
                ))}
              </div>
            </S.ContainerText>
          ))}
        </S.ContainerTexts>
      </S.Content>

      <Sections.Footer />
    </S.Container>
  );
}
