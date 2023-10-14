import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { FormControlProps, FormControlClasses} from "@mui/material/FormControl";

type TMuiFormControl =
  | {
      defaultProps?: Partial<FormControlProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof FormControlClasses,
              "MuiFormControl",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiFormControl: TMuiFormControl = {

  styleOverrides: {
    root: ({ownerState, theme}) => ({
        
    }),
  }
};
