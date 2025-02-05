"use client";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import * as S from "./styled";
import { breadcrumbItems } from "./utils";
import { getImage } from "@/assets/images";
import { Post, PostsContext } from "@/contexts/posts";
import { Layout, Sections } from "@/components/organism";
import { Breadcrumb, Header } from "@/components/modules";
import { formatDate } from "@/utils/utils";

export default function Project() {
  const { posts } = useContext(PostsContext);
  const { id } = useParams<{ id: string }>();
  const [postSelected, setPostSelected] = useState<Post>();

  // const handleFindPost = () => {
  //   const post = posts.filter((item) => item.id === parseFloat(id))[0];
  //   setPostSelected(post);
  // };

  // useEffect(() => {
  //   handleFindPost();
  // }, [id]);

  useEffect(() => {
    const fetchPageContent = async () => { 
      // 36 a 28
      try {
        const response = await fetch(
          "https://devblog.insanydesign.com/wp-json/wp/v2/posts/28"
        );
        const data = await response.json();

        console.log("data ::", data);

        const authorUrl = data._links.author?.[0]?.href;
        let details_author = null;

        if (data) {
          try {
            const authorResponse = await fetch(authorUrl);
            if (authorResponse.ok) {
              details_author = await authorResponse.json();
            }
          } catch (error) {
            console.error(
              `Erro ao buscar detalhes do autor para ${authorUrl}:`,
              error
            );
          }
        }
        const postsWithAuthorDetails = { ...data, details_author };

        if (postsWithAuthorDetails) {
          setPostSelected(postsWithAuthorDetails);
        }
      } catch (error) {
        console.error("Erro ao carregar a página:", error);
      }
    };

    fetchPageContent();
  }, []);

  return (
    <Layout>
      <S.Container>
        <Header />
        <S.Content>
          <Breadcrumb items={breadcrumbItems(postSelected?.slug || "")} />

          <S.Header>
            <S.Tag>{postSelected?.status}</S.Tag>
            <S.Title
              children={undefined}
              dangerouslySetInnerHTML={{
                __html: postSelected?.title.rendered || "",
              }}
            />

            <S.ContainerUser>
              <S.Avatar
                alt="Image avatar"
                style={{ objectFit: "cover" }}
                src={
                  postSelected?.details_author.avatar_urls[96] ||
                  getImage("avatar").src
                }
              />
              <S.AuthorInfo>
                <S.Prefix>Por </S.Prefix>
                <S.AuthorName>{postSelected?.details_author.name}</S.AuthorName>
                <S.Dot />
                <S.Date>
                  {formatDate(postSelected?.date || "", "D de MMM YYYY")}
                </S.Date>
              </S.AuthorInfo>
            </S.ContainerUser>
          </S.Header>
          {postSelected && (
            <div
              className="ContainerText"
              dangerouslySetInnerHTML={{
                __html: postSelected.content.rendered,
              }}
            ></div>
          )}
        </S.Content>

        <Sections.Footer />
      </S.Container>
    </Layout>
  );
}
