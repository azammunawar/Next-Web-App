"use client";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeName>(defaultTheme);

  return (
    <html>
      <head />
      <body>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={selectedTheme(theme)}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
       
        </body>
    </html>
  );
}
