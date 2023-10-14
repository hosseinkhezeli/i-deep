import { TextFieldProps } from "@mui/material/TextField";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import {MenuProps, MenuClasses} from "@mui/material";
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
  defaultProps: {
    PaperProps: {
      sx: { mt: 3, boxShadow: "0px 0px 10px rgba(94, 129, 233, 0.2)" },
    },
  },
  styleOverrides: { list: {direction: theme.direction}, paper: {marginTop: 10} },
};
