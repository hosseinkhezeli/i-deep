import { CheckboxProps } from "@mui/material/Checkbox";
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";

type TMuiCheckbox =
  | {
      defaultProps?: Partial<CheckboxProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              "root",
              "MuiCheckbox",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiCheckbox: TMuiCheckbox= {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      color:theme.palette.mode==="dark"?theme.palette.text.secondary:theme.palette.text.primary
    }),
    
  },
};
