"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { useEffect, useState } from "react";
import { getState } from "@/context/store";
import { PaletteMode } from "@mui/material";
import customTheme from "../../theme";
import { Poppins } from "next/font/google";
import { Vazirmatn } from "next/font/google";


const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic"],
  display: "swap",
});


export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTheme, setActiveTheme] = useState<PaletteMode>("light");
  const [activeLang, setActiveLang] = useState(getState().common.lang);
  const [activeFont, setActiveFont] = useState(poppins);

  useEffect(() => {
    setActiveTheme(getState().common.themeMode);
  }, [getState().common.themeMode]);

  useEffect(() => {
    setActiveLang(getState().common.lang);
    setActiveFont(activeLang === "en" ? poppins : vazirmatn);
  }, [getState().common.lang]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={customTheme(activeTheme, activeFont)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
