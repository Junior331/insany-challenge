"use client";

import { Load } from "../Load";
import { Props } from "./@types";
import * as S from "./ButtonStyled";

const Button = ({
  children,
  loading = false,
  disabled = false,
  ...rest
}: Props) => {
  return (
    <S.Button disabled={disabled} {...rest}>
      {loading ? <Load /> : <>{children}</>}
    </S.Button>
  );
};

export { Button };
