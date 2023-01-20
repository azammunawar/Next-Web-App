import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.

const themes = {
  light: {
    mainColor: "#FF2D00",
    background: "#fff",
  },
  dark: {
    mainColor: "#4DFF00",
    background: "#000",
  },
};

export type ThemeName = "light" | "dark";
export const defaultTheme = "light";
export interface ThemeObject {
  theme: ThemeName;
  setTheme: any;
}
export const selectedTheme = (theme: ThemeName) =>
  createTheme({
    palette: {
      background: {
        default: themes[theme].background,
        // paper: themes[theme].background,
      },
      primary: {
        main: themes[theme].mainColor,
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });
