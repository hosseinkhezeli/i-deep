import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { OutlinedInputProps, OutlinedInputClasses } from "@mui/material";
import { Theme } from "@mui/material/styles";
import theme from "@/theme/theme";

type TMuiOutlinedInput =
  | {
      defaultProps?: Partial<OutlinedInputProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof OutlinedInputClasses,
              "MuiOutlinedInput",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiOutlinedInput: TMuiOutlinedInput = {
  styleOverrides: {
    root: ({ ownerState, Theme }) => ({
      borderRadius: 8,
      // color: ownerState.disabled ? 'red' : '',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,

      // boxShadow: "2px 6px 9px 0px rgba(0, 0, 0, 0.13), 0px 4px 15px 0px rgba(141, 141, 141, 0.06) inset",
      // boxShadow: "2px 6px 9px 0px #00000021 inset , 0px 4px 9px 0px #8D8D8D0F",

      // "&.Mui-disabled": {color: 'red'},
      "& .MuiInputBase-root.Mui-disabled": {
        color: "rgba(35,32,32,0.6)",
      },
      "& .MuiOutlinedInput-input": {
        paddingTop: 14,
        paddingBottom: 14,
        "&.Mui-disabled": { WebkitTextFillColor: theme.palette.grey[500] },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(44, 48, 61, 1)",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgb(67 72 89)",
        color: theme.palette.grey[300],
      },
      "&.Mui-focused ": {
        boxShadow: `inset 0px 0px 15px ${theme.palette.primary.main.padEnd(9,"99")}`,
        color: theme.palette.primary.main,

        "&:hover": {
          boxShadow: `0px 0px 10px ${theme.palette.primary.main.padEnd(9,"50")} `,
          "& .MuiOutlinedInput-notchedOutline": {
            // borderColor: `${theme.palette.info.main} !important`,
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderWidth: 1,
        },
      },
      "&.Mui-error": {
        // boxShadow: "0 0 10px rgb(169 32 45 / 75%)",
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
    }),
  },
};
