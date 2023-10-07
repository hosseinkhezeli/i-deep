import { OverridesStyleRules } from "@mui/material/styles/overrides";
import {
  FilledInputProps,
  FilledInputClasses,
} from "@mui/material/FilledInput";
import { Theme } from "@mui/material/styles";
import { lightPalette } from "../palette/light/lightPalette";

type TMuiFilledInput =
  | {
    defaultProps?: Partial<FilledInputProps> | undefined;
    styleOverrides?:
    | Partial<
      OverridesStyleRules<
        keyof FilledInputClasses,
        "MuiFilledInput",
        Omit<Theme, "components">
      >
    >
    | undefined;
    variants?: [] | undefined;
  }
  | undefined;

export const MuiFilledInput: TMuiFilledInput = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      backgroundColor: lightPalette.secondary.back,
      '&:hover': {
        backgroundColor: lightPalette.secondary[25]

      },
      '&.Mui-focused': { background: lightPalette.secondary[25], },
      "& input": {
        ...(ownerState.size === "small"
          ? {
            padding: 6,
          }
          : ownerState.size === "medium"
            ? { padding: 14 }
            : { padding: 18 }),
      },
    }),
  },
};
