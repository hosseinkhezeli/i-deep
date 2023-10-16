import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { ButtonProps, ButtonClasses, Theme, PaletteMode } from "@mui/material";


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

export const MuiButton: TMuiButton = {
  defaultProps: { disableElevation: true },
  styleOverrides: {
    root: ({ ownerState ,theme}) => ({
      ...(ownerState.variant === "contained" &&
        ownerState.color === "primary" && {
          backgroundColor: theme.palette.primary.main,
          color:
           theme.palette.mode === "light"
              ? theme.palette.text.secondary
              : theme.palette.text.primary,
        }),
        ...(ownerState.variant === "contained" &&
        ownerState.color === "secondary" && {
          backgroundColor: theme.palette.secondary.main,
          color:
         theme.palette.mode === "light"
              ? theme.palette.text.secondary
              : theme.palette.text.primary,
        }),
        ...(ownerState.variant === "contained" &&
        ownerState.color === "info" && {
          backgroundColor: theme.palette.secondary.contrastText,
          color:
         theme.palette.mode === "light"
              ? theme.palette.text.primary
              : theme.palette.text.primary,
              ":hover": {
                color:
               theme.palette.mode === "light"
                  ? theme.palette.text.secondary
                  : theme.palette.text.primary,
              },
        }),
      ...(ownerState.variant === "outlined" &&
        ownerState.color === "primary" && {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.primary.main,
          ":hover": {
            backgroundColor: theme.palette.primary.light,
            color:
           theme.palette.mode === "light"
                ? theme.palette.primary.main
                : theme.palette.text.primary,
          },
        }),
      borderRadius: theme.shape.borderRadius,
      textTransform: "none",
      minHeight: "45px",
      whiteSpace: "nowrap",
      padding: 0,
    }),
  },
};
