import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { MenuProps, MenuClasses } from "@mui/material";
import theme from "@/theme/theme";

type TMuiMenu =
  | {
      defaultProps?: Partial<MenuProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof MenuClasses,
              "MuiMenu",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiMenu: TMuiMenu = {
  styleOverrides: {
    paper: ({ ownerState, Theme }) => ({
      "& .MuiMenuItem-root": {
        color:theme.palette.text.primary,
        ":hover": {
          backgroundColor: `${theme.palette.primary.light}`,
        },
      },
    }),
  },
};
