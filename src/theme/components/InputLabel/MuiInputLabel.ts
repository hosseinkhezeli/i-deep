import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import { InputLabelProps, InputLabelClasses} from "@mui/material/InputLabel";

type TMuiInputLabel =
  | {
      defaultProps?: Partial<InputLabelProps> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof InputLabelClasses,
              "MuiInputLabel",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiInputLabel: TMuiInputLabel = {

  styleOverrides: {
    root: ({ownerState, theme}) => ({
      top: 14,
      left: 14,
      transform: 'unset',
      color: theme.palette.grey[100] ,
      '&[data-shrink=true]': {
        display: 'none'
      }
    }),
  }
};
