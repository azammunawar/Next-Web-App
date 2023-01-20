import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import {
  selectedTheme,
  ThemeName,
  defaultTheme,
  ThemeObject,
} from "../src/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext<ThemeObject | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [theme, setTheme] = useState<ThemeName>(defaultTheme);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={selectedTheme(theme)}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
