"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { useEffect, useState } from "react";
import { getState } from "@/context/store";
import { PaletteMode } from "@mui/material";
import customTheme from "../../theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTheme, setActiveTheme] = useState<PaletteMode>(
    "light"
  );

  useEffect(() => {
    setActiveTheme(getState().layoutTheme.layoutTheme);
  }, [getState().layoutTheme.layoutTheme]);



  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={customTheme(activeTheme)} >
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
