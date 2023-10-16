import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {  
  interface Palette {
    gray: PaletteColor
    text: PaletteColor
    blue: PaletteColor
    secondary: PaletteColor
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {}

  interface PaletteColor {
    100?: string;
    75?: string;
    50?: string;
    25?: string;
    20?: string;
    0?: string;
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    back?:string;
    // blue?: string
    purple?: string,
    Teal?: string,
  }
  interface TypeBackground {
    1?: string;
    2?: string;
    3?: string;
  }
  
}
