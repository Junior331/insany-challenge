"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { LayoutProps } from "./@types";
import { Snackbar } from "@/components/modules";
import { GlobalStyles } from "@/styles/globalStyled";
import * as S from "./LayoutStyled";

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  useEffect(() => {
    const alreadyReloaded = sessionStorage.getItem("reloaded");

    if (!alreadyReloaded) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloaded");
    }
  }, [pathname]);

  return (
    <S.LayoutContainer>
      <GlobalStyles />
      <Snackbar />
      <S.LayoutContent>
        <S.Content>{children}</S.Content>
      </S.LayoutContent>
    </S.LayoutContainer>
  );
};

export default Layout;
