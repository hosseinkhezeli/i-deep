import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { AlertClasses, AlertProps } from "@mui/material/Alert";

type TMuiAlert =
  | {
      defaultProps?: Partial<AlertProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof AlertClasses,
              "MuiAlert",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: any[] | undefined;
    }
  | undefined;

export const MuiAlert: TMuiAlert = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...(ownerState.severity === "error" && {
        backgroundColor: theme.palette.error.light,
      }),
      borderRadius: 10,
      paddingTop: 4,
      paddingBottom: 4,
      "& .MuiAlert-message": {
        fontSize: 10,
        display:"flex",
        color: theme.palette.text.primary,
        alignItems:"center"
      },
      "& .MuiAlertTitle-root": {
        fontSize: 16,
        height:"min-content",
        width:"max-content",
        color: theme.palette.text.primary,
        margin:"0px",
      },
      "& .MuiSvgIcon-root": {
        color: theme.palette.text.primary,
      },
      "& .MuiAlert-icon": {
        alignItems:"center"
      },
    }),
  },
};
