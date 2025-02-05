"use server";

import { NextResponse } from "next/server";
import { getInfoCookie, setInfoCookie } from "@/utils/sessionCookies";

export const getPostsInCookie = async () => {
  const value = await getInfoCookie({ name: "cachedPosts" });
  return NextResponse.json({ cachedPosts: value });
};

export const savePostsInCookie = async (posts: any) => {
  await setInfoCookie({
    name: "cachedPosts",
    data: JSON.stringify(posts),
  });
};
