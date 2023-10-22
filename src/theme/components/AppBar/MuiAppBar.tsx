import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import {AppBarProps, AppBarClasses} from "@mui/material";

type TMuiAppBar =
  | {
      defaultProps?: Partial<AppBarProps<"button", {}>> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof AppBarClasses,
              "MuiAppBar",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiAppBar: TMuiAppBar = {
  defaultProps: {elevation:0},
  styleOverrides: {
    root: ({ownerState , theme}) => ({
      backgroundColor: theme.palette.background.default,
      boxShadow:`0px 0px 10px 0px ${theme.palette.mode==="light"?theme.palette.secondary.main.padEnd(9,"15"):theme.palette.primary.main.padEnd(9,"15")}`,
      ":dir":theme.direction
    }),
  },
}
