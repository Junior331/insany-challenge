"use client";

import { LayoutProps } from "./@types";
import { GlobalStyles } from "@/styles/globalStyled";
import { Snackbar } from "@/components/modules";
import * as S from "./LayoutStyled";

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutContainer>
      <GlobalStyles />
      <Snackbar />
      <S.LayoutContent>
        <S.Content>
          {children}
        </S.Content>
      </S.LayoutContent>
    </S.LayoutContainer>
  );
};

export default Layout;
