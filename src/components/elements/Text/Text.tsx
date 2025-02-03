import { TextProps } from "./@types";
import * as S from "./TextStyled";

export const Text = ({ children, ...res }: TextProps) => {
  return <S.TextContainer {...res}>{children}</S.TextContainer>;
};
