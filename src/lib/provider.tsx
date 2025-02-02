"use client";

import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/globalStyled";
import { SnackbarProvider } from "@/contexts/snackbar";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SnackbarProvider>{children}</SnackbarProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
