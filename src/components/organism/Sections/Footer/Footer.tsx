"use client";

import Link from "next/link";
import * as S from "./FooterStyled";
import { getIcons } from "@/assets/icons";
import { links, SocialLinks } from "./utils";
import { getImage } from "@/assets/images";

export const Footer = () => {
  return (
    <S.Container id="Footer">
      <S.Content>
        <S.NewsletterSection>
          <S.Icon src={getIcons("emailFast").src} alt="Icon email fast" />

          <S.Title>Fique por dentro das novidades</S.Title>
          <S.Text size={1.6}>Cadastre seu e-mail para receber conteúdo</S.Text>
          <S.Form>
            <S.Input type="email" placeholder="Insira seu melhor e-mail" />
            <S.Button>Receber Novidades</S.Button>
          </S.Form>
        </S.NewsletterSection>

        <S.LinksSection>
          <S.LinksList>
            {links.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </S.LinksList>

          <S.Column>
            <S.Title size={1.6}>Acompanha nas redes</S.Title>
            <S.SocialList>
              {SocialLinks.map((item) => (
                <li key={item.id}>
                  <S.Icon src={item.icon} alt={`Icon ${item.label}`} />
                  <Link href={item.path} target="_blank">
                    {item.label}
                  </Link>
                </li>
              ))}
            </S.SocialList>
          </S.Column>
        </S.LinksSection>
      </S.Content>

      <S.Bottom>
        <S.ContainerLogo>
          <S.Image alt="Image logo" src={getImage("logo").src} />
          <S.ContainerText>
            <S.Text size={2.6553}>Smart</S.Text>
            <S.Title size={2.6553}>Money</S.Title>
          </S.ContainerText>
        </S.ContainerLogo>

        <S.Text>© 2022 SmartBusiness. Todos os direitos reservados</S.Text>
        <S.LanguageSelect>
          <S.Icon alt="Icon globlo" src={getIcons("globlo").src} />
          <S.Text>Português</S.Text>
        </S.LanguageSelect>
        <S.Credits>
          Desenvolvido por
          <Link href="https://insany.design">Insany Design</Link>
        </S.Credits>
      </S.Bottom>
    </S.Container>
  );
};
