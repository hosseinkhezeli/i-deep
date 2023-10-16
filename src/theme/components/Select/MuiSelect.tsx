import { SelectProps } from "@mui/material/Select";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";


type TMuiSelect =
  | {
      defaultProps?: Partial<SelectProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<"root", "MuiSelect", Omit<Theme, "components">>
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiSelect: TMuiSelect = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...(ownerState.variant === "outlined" && {
        backgroundColor: theme.palette.mode==="dark"?theme.palette.secondary.dark:theme.palette.background.paper,

          color:theme.palette.text.secondary,

      }),

      "&.Mui-focused": {
        boxShadow: `0px 0px 5px 0px ${theme.palette.primary.light} inset`,
      },
      "& .MuiOutlined-notchedOutline": {
        borderColor: theme.palette.secondary.light,
      },
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.secondary.light,
          boxShadow: `0px 0px 5px 0px ${theme.palette.primary.light}`,
        },
        "& .MuiMenu-list-root":{
          color:theme.palette.primary.main
        }
      },
    }),
  },
};
