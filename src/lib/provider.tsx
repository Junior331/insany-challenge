"use client";

import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import { PostsProvider } from "@/contexts/posts";
import { GlobalStyles } from "@/styles/globalStyled";
import { SnackbarProvider } from "@/contexts/snackbar";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PostsProvider>
        <SnackbarProvider>{children}</SnackbarProvider>
      </PostsProvider>
    </ThemeProvider>
  );
}
