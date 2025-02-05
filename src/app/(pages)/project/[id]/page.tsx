"use client";
import { Key, useContext, useEffect, useState } from "react";

import * as S from "./styled";
import { breadcrumbItems } from "./utils";
import { getImage } from "@/assets/images";
import { formatDate } from "@/utils/utils";
import { useParams } from "next/navigation";
import { Load } from "@/components/elements";
import { Post, PostsContext } from "@/contexts/posts";
import { Layout, Sections } from "@/components/organism";
import { Breadcrumb, Header } from "@/components/modules";

export default function Project() {
  const { posts } = useContext(PostsContext);
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [postSelected, setPostSelected] = useState<Post | null>(null);

  useEffect(() => {
    if (!id || !posts.length) return;

    const post = posts.find((item) => item.id === parseFloat(id)) || null;
    setPostSelected(post);
    setLoading(false);
  }, [id, posts]);

  return (
    <Layout>
      <S.Container>
        <Header />

        {loading ? (
          <S.Containerload>
            <Load />
          </S.Containerload>
        ) : postSelected ? (
          <S.Content>
            <Breadcrumb items={breadcrumbItems(postSelected.slug || "")} />

            <S.Header>
              <S.Tag>{postSelected.status}</S.Tag>
              <S.Title>{postSelected.title.rendered}</S.Title>

              <S.ContainerUser>
                <S.Avatar
                  alt="Image avatar"
                  style={{ objectFit: "cover" }}
                  src={
                    postSelected.details_author.avatar_urls[96] ||
                    getImage("avatar").src
                  }
                />
                <S.AuthorInfo>
                  <S.Prefix>Por </S.Prefix>
                  <S.AuthorName>
                    {postSelected.details_author.name}
                  </S.AuthorName>
                  <S.Dot />
                  <S.Date>
                    {formatDate(postSelected.date || "", "D de MMM YYYY")}
                  </S.Date>
                </S.AuthorInfo>
              </S.ContainerUser>
            </S.Header>

            <S.Banner
              alt="Image logo"
              src={postSelected.media?.source_url || getImage("fallback").src}
            />

            <S.Card>
              <S.Text
                dangerouslySetInnerHTML={{
                  __html: postSelected?.excerpt?.rendered || "",
                }}
              />
            </S.Card>

            <S.ContainerTexts>
              {postSelected?.content?.rendered
                ?.split(/<\/?p>/)
                .map((text: string) => text.trim())
                .filter(
                  (text: string) =>
                    text !== "" && text !== "Aqui está o post completo:"
                )
                .map((text: string, index: Key | null | undefined) => {
                  const cleanText = text.replace(/<\/?strong>/g, "");

                  if (/•/.test(cleanText)) {
                    const listItems = cleanText
                      .split("•")
                      .map((item) => item.trim())
                      .filter((item) => item !== "");

                    return (
                      <S.ContainerText key={index}>
                        <S.List>
                          {listItems.map((item, idx) => (
                            <S.Item key={idx}>
                              <S.Text
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            </S.Item>
                          ))}
                        </S.List>
                      </S.ContainerText>
                    );
                  }

                  const isTitle = /<strong>(.*?)<\/strong>/.test(text);
                  return (
                    <S.ContainerText key={index}>
                      {isTitle ? (
                        <S.Title
                          dangerouslySetInnerHTML={{ __html: cleanText }}
                        />
                      ) : (
                        <S.Text
                          dangerouslySetInnerHTML={{ __html: cleanText }}
                        />
                      )}
                    </S.ContainerText>
                  );
                })}
            </S.ContainerTexts>
          </S.Content>
        ) : (
          <S.Content>
            <S.Message>Ops! Parece que este post não existe ou foi removido.</S.Message>
          </S.Content>
        )}

        <Sections.Footer />
      </S.Container>
    </Layout>
  );
}
