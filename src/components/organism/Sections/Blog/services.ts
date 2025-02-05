import { Post } from "@/contexts/posts";
import { savePostsInCookie } from "@/services/services";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(
      "https://devblog.insanydesign.com/wp-json/wp/v2/posts/"
    );
    if (!response.ok) throw new Error("Falha ao buscar posts");

    const posts = await response.json();

    const fetchResource = async (url?: string) => {
      if (!url) return null;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Erro ao buscar recurso: ${url}`);
        return await res.json();
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const enhancedPosts = await Promise.all(
      posts.map(async (post: any) => {
        const [details_author, media] = await Promise.all([
          fetchResource(post._links.author?.[0]?.href),
          fetchResource(post._links["wp:featuredmedia"]?.[0]?.href),
        ]);

        return { ...post, details_author, media };
      })
    );

    await savePostsInCookie(enhancedPosts);
    return enhancedPosts;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
};
