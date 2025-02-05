/* eslint-disable @typescript-eslint/no-explicit-any */
import { emptyPost } from "@/utils/emptys";
import { ReactNode, createContext, useMemo, useState } from "react";

export interface Post {
  id: number;
  _links: any;
  date: string;
  content: any;
  slug: string;
  type: string;
  link: string;
  tags: number[];
  status: string;
  author: number;
  format: string;
  sticky: boolean;
  template: string;
  date_gmt: string;
  modified: string;
  details_author: {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls: {
      [size: number]: string;
    };
    meta: any;
    _links: {
      self: [
        {
          href: string;
          targetHints: {
            allow: string[];
          };
        }
      ];
      collection: [
        {
          href: string;
        }
      ];
    };
  };
  media: {
    id: number;
    date: string;
    source_url: string;
    title: { rendered: string };
    description: { rendered: string };
  };
  categories: number[];
  class_list: string[];
  ping_status: string;
  modified_gmt: string;
  featured_media: number;
  comment_status: string;
  guid: { rendered: string };
  meta: { footnotes: string };
  title: { rendered: string };
  excerpt: { rendered: string; protected: boolean };
}

interface PostsContextType {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

export const PostsContext = createContext<PostsContextType>({
  posts: emptyPost,
  setPosts: () => {},
});

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(emptyPost);

  const value = useMemo(() => ({ posts, setPosts }), [posts, setPosts]);

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
