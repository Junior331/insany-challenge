import { Post } from "@/contexts/posts";

export const getPosts = async () => {
  try {
    const response = (await fetch(
      "https://devblog.insanydesign.com/wp-json/wp/v2/posts/"
    )) as any;
    const result = await response.json();

    const postsWithAuthorDetails = await Promise.all(
      result.map(async (item: any) => {
        const authorUrl = item._links.author?.[0]?.href;
        let details_author = null;

        if (authorUrl) {
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

        return { ...item, details_author };
      })
    );

    return postsWithAuthorDetails as Post[];
  } catch (error) {
    console.error("Um error aconteceu:", error);
  }
};
