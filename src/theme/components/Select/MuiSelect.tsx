import { SelectProps } from "@mui/material/Select";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import theme from "@/theme/theme";

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
    root: ({ ownerState, Theme }) => ({
      ...(ownerState.variant === "outlined" && {
        backgroundColor: theme.palette.background.paper,
      }),

      "&.Mui-focused": {
        background: theme.palette.background.paper,
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
