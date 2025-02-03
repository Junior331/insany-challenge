import { TitleProps } from "./@types";
import * as S from "./TitleStyled";

export const Title = ({ children, ...res }: TitleProps) => {
  return <S.TitleContainer {...res}>{children}</S.TitleContainer>;
};
