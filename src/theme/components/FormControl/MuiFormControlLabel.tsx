import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { FormControlLabelProps, FormControlLabelClasses} from "@mui/material/FormControlLabel";

type TMuiFormControlLabel =
  | {
      defaultProps?: Partial<FormControlLabelProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof FormControlLabelClasses,
              "MuiFormControlLabel",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiFormControlLabel: TMuiFormControlLabel = {

  styleOverrides: {
    root: ({ownerState, theme}) => ({
        "& .MuiTypography-root":{
            color:theme.palette.mode==="dark"?theme.palette.text.secondary:theme.palette.text.primary
        }
    }),
  }
};
