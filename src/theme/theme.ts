import { createTheme } from "@mui/material/styles";
import { typography } from "./components/Typography";
import { lightPalette } from "./components/palette/light/lightPalette";
import { darkPalette } from "./components/palette/dark/darkPalette";
import { MuiCssBaseline } from "./components/mui-css-baseline";
import { MuiTextField } from "./components/TextField/TextField";
import { MuiAlert } from "./components/Alert/Alert";
import { MuiButton } from "./components/Button/MuiButton";
import { MuiChip } from "./components/Chip/MuiChip";
import { MuiTab } from "./components/Tabs/Tab/MuiTab";
import { MuiMenu } from "./components/menu/MuiMenu";
import { MuiIconButton } from "./components/IconButton/MuiIconButon";
import { MuiCard } from "./components/Card/MuiCard";
import { MuiTypography } from "./components/Typography/MuiTypography";
import { MuiAppBar } from "./components/AppBar/MuiAppBar";
import { MuiAccordion } from "./components/Accordion/MuiAccordion";
import { MuiCheckbox } from "./components/CheckBox/MuiCheckbox";
import { MuiSelect } from "./components/Select/MuiSelect";
import { MuiFormControl } from "./components/FormControl/MuiFormControl";
import { MuiFormControlLabel } from "./components/FormControl/MuiFormControlLabel";
import "./components/palette/palette.d.ts"
import { PaletteMode } from "@mui/material";


const getDesignTokens = (mode: PaletteMode) => ({
  mode,
  ...(mode === "light" ? lightPalette : darkPalette),
});

const customTheme = (mode: PaletteMode) =>
  createTheme({
    direction: "ltr",
    palette: getDesignTokens(mode),
    typography,
    spacing: 4,
    shape: {
      borderRadius: 10,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiFormControl,
      MuiFormControlLabel,
      MuiSelect,
      // @ts-ignore
      MuiAccordion,
      MuiCheckbox,
      MuiCssBaseline,
      MuiAppBar,
      MuiTextField,
      MuiAlert,
      MuiButton,
      MuiChip,
      MuiTab,
      MuiIconButton,
      MuiMenu,
      MuiCard,
      MuiTypography,
    },
  });

export default customTheme;
