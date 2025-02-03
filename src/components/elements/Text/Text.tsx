"use client";

import * as S from "./TextStyled";
import { TextProps } from "./@types";

export const Text = ({ children, ...res }: TextProps) => {
  return <S.TextContainer {...res}>{children}</S.TextContainer>;
};
