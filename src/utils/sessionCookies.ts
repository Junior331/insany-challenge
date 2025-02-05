"use server";

import { cookies } from "next/headers";

export const getInfoCookie = async ({
  name,
}: {
  name: string;
}): Promise<string | undefined> => {
  const cookieData = await cookies();
  return cookieData.get(name)?.value;
};

export const setInfoCookie = async ({
  name,
  data,
}: {
  name: string;
  data: string;
}) => {
  const cookieData = await cookies();
  return cookieData.set({
    name,
    value: data,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: false,
  });
};

export const deleteInfoCookie = async ({ name }: { name: string }) => {
  const cookieData = await cookies();
  return cookieData.delete(name);
};
