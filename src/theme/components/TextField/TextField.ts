import { TextFieldProps } from "@mui/material/TextField";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";

type TMuiTextField =
  | {
      defaultProps?: Partial<TextFieldProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              "root",
              "MuiTextField",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiTextField: TMuiTextField = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      "& .MuiOutlinedInput-input":{
        color:theme.palette.text.secondary,
      },
      "& .MuiFilledInput-input":{
        color:theme.palette.text.secondary,
      },
      "& .MuiFilledInput-root": {
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.secondary.dark
            : theme.palette.background.paper,

        borderRadius: theme.shape.borderRadius,
        "&::before": { display: "none" },
        "&::after": { display: "none" },
      },
      "& .Mui-disabled": {
        color: theme.palette.text.disabled,
      },
      "& .MuiInputLabel-filled": {
        color: theme.palette.text.disabled,
      },
      "& .MuiInputLabel-outlined": {
        color: theme.palette.primary.main,
      },
      "& .MuiOutlinedInput-root": {
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.secondary.dark
            : theme.palette.background.paper,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: `none`,
      },

      "&.Mui-error": {
        boxShadow: `0px 0px 5px 0px ${theme.palette.error.main}`,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: `${theme.palette.error.main}`,
          borderWidth: 1,
        },

        "&:hover": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: `${theme.palette.error.dark} !important`,
          },
        },
      },

      ...(ownerState.variant === "outlined" && {
        borderRadius: theme.shape.borderRadius,
        transition: "0.2s",
        border: `1px solid ${theme.palette.secondary.light}`,
        "&:hover": {
          boxShadow: `0px 0px 5px 0px ${theme.palette.primary.light}`,
        },
        "&.Mui-focused": {
          backgroundColor: theme.palette.mode==="dark"?theme.palette.secondary.dark:theme.palette.background.paper,
          boxShadow: `0px 0px 5px 0px ${theme.palette.primary.light} inset`,
        },
      }),

      ...(ownerState.variant === "filled" && {
        borderRadius: theme.shape.borderRadius,
        transition: "0.3s",
        border: `1px solid ${theme.palette.primary.light}`,
        "&:hover": {
          backgroundColor: theme.palette.mode==="dark"?theme.palette.secondary.light:theme.palette.background.paper,
          boxShadow: `0px 0px 10px 0px ${theme.palette.primary.light}`,
        },
        "&.Mui-focused": {
          backgroundColor: theme.palette.mode==="dark"?theme.palette.secondary.dark:theme.palette.background.paper,
          boxShadow: `0px 0px 5px 0px ${theme.palette.primary.light} inset`,
        },
      }),
    }),
  },
};
