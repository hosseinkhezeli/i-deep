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
import { NextFont } from "next/dist/compiled/@next/font";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTheme, setActiveTheme] = useState<PaletteMode>("light");
  const [activeLang, setActiveLang] = useState("en");

  useEffect(() => {
    setActiveTheme(getState().common.themeMode);
  }, [getState().common.themeMode]);

  useEffect(() => {
    setActiveLang(getState().common.lang);
  }, [getState().common.lang]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={customTheme(activeTheme, activeLang)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
