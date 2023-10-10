import { OverridesStyleRules } from "@mui/material/styles/overrides";
import {
  FilledInputProps,
  FilledInputClasses,
} from "@mui/material/FilledInput";
import { Theme } from "@mui/material/styles";
import theme from "@/theme/theme";

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
    root: ({ ownerState, Theme }) => ({
      backgroundColor: theme.palette.background.default,
      transition: "0.3s",
      '&:hover': {
        backgroundColor: theme.palette.background.default,
        boxShadow:`0px 0px 10px 0px ${theme.palette.primary.main}`
      },
      '&.Mui-focused': { background: theme.palette.background.default,boxShadow:`0px 0px 10px 0px ${theme.palette.primary.main} inset` },
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
