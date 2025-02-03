import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  palette: {
    color: {
      brand: {
        dark: "#0043D9",
        light: "#2E7AFF",
        default: "#1D63FF",
      },
      auxiliary: {
        black: "#000000",
        white: "#FFFFFF",
        green: "#35D9A8",
        yellow: "#FFD76F",
      },
      neutrals: {
        dark: {
          dark_50: "#757385",
          dark_100: "#4C4A5E",
          dark_200: "#413E52",
          dark_300: "#353345",
          dark_400: "#2A2739",
          dark_500: "#1E1C2D",
          dark_600: "#131020",
          dark_700: "#0D0B1A",
          dark_800: "#070514",
        },
        light: {
          gray_01: "#CBD6E2",
          gray_02: "#F2F5FC",
        },
      },
    },
  },
  message: {
    info: {
      default: "#2196f3",
    },
    error: {
      default: "#d32f2f",
    },
    success: {
      default: "#388e3c",
    },
    warning: {
      default: "#f57c00",
    },
  },
  typography: {
    fontSize: 1.6,
    fontSizeBold: 2.4,
    fontSizeLight: 1.2,
    fontSizeMedium: 1.4,
    fontWeightBold: 700,
    fontSizeRegular: 1.8,
    htmlFontSize: "10px",
    fontWeightLight: 400,
    fontWeightRegular: 600,
  },
};
