import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { ButtonProps, ButtonClasses, Theme, PaletteMode } from "@mui/material";
import theme from "@/theme/theme";
import { getState } from "@/context/store";

type TMuiButton =
  | {
      defaultProps?: Partial<ButtonProps<"button", {}>> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof ButtonClasses,
              "MuiButton",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;
  const activeTheme:PaletteMode = getState().layoutTheme.layoutTheme
export const MuiButton: TMuiButton = {
  defaultProps: { disableElevation: true },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.variant === "contained" &&
        ownerState.color === "primary" && {
          backgroundColor:  theme(activeTheme).palette.primary.main,
          color:
            theme(activeTheme).palette.mode === "light"
              ?  theme(activeTheme).palette.text.secondary
              :  theme(activeTheme).palette.text.primary,
        }),
        ...(ownerState.variant === "contained" &&
        ownerState.color === "secondary" && {
          backgroundColor:  theme(activeTheme).palette.secondary.main,
          color:
          theme(activeTheme).palette.mode === "light"
              ?  theme(activeTheme).palette.text.secondary
              :  theme(activeTheme).palette.text.primary,
        }),
        ...(ownerState.variant === "contained" &&
        ownerState.color === "info" && {
          backgroundColor:  theme(activeTheme).palette.secondary.contrastText,
          color:
          theme(activeTheme).palette.mode === "light"
              ?  theme(activeTheme).palette.text.primary
              :  theme(activeTheme).palette.text.primary,
              ":hover": {
                color:
                theme(activeTheme).palette.mode === "light"
                  ?  theme(activeTheme).palette.text.secondary
                  :  theme(activeTheme).palette.text.primary,
              },
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "primary" && {
          backgroundColor:  theme(activeTheme).palette.background.default,
          color:  theme(activeTheme).palette.primary.main,
          ":hover": {
            backgroundColor:  theme(activeTheme).palette.primary.light,
            color:
            theme(activeTheme).palette.mode === "light"
                ?  theme(activeTheme).palette.primary.main
                :  theme(activeTheme).palette.text.primary,
          },
        }),
      borderRadius:  theme(activeTheme).shape.borderRadius,
      textTransform: "none",
      minHeight: "45px",
      whiteSpace: "nowrap",
      padding: 0,
    }),
  },
};
