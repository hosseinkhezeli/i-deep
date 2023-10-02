import { TextFieldProps } from "@mui/material/TextField";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";

type TMuiTextField =
  | {
      defaultProps?: Partial<TextFieldProps> | undefined;
      styleOverrides?:
        | Partial<OverridesStyleRules<"root", "MuiTextField", Omit<Theme, "components">>>
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiTextField: TMuiTextField = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      "& .MuiInputBase-root": {
        fontSize: "15px",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#c6c6c6",
        },
        ".MuiSvgIcon-root": {
          marginRight: 5,
        },
      },
      "& .MuiInputBase-input": {
        "&:-webkit-autofill": {
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": theme.palette.primary.main,
          transition: "background-color 5000s ease-in-out 0s",
          backgroundColor: "red",
          // boxShadow: `0 0 0 1000px ${theme.palette.background.default} inset !important`,
        },
      },

      "& .MuiOutlinedInput-input": {
        borderRadius: "8px",
      },

      "& .MuiFilledInput-root": {
        borderRadius: 10,

        "-webkit-text-fill-color": theme.palette.text.primary,

        "& .MuiInputAdornment-root": {
          marginTop: "0!important",
          height: "100%",
        },

        "&::before": { display: "none" },
        "&::after": { display: "none" },
      },

      "-webkit-text-fill-color": theme.palette.text.primary,
    }),
  },
};
