import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Theme } from "@mui/material/styles";
import {AccordionProps, AccordionClasses} from "@mui/material";
import theme from "@/theme/theme";

type TMuiAccordion =
  | {
      defaultProps?: Partial<AccordionProps<"div", {}>> | undefined;
      styleOverrides?:
        | Partial<
            OverridesStyleRules<
              keyof AccordionClasses,
              "MuiAppBar",
              Omit<Theme, "components">
            >
          >
        | undefined;
      variants?: [] | undefined;
    }
  | undefined;

export const MuiAccordion: TMuiAccordion = {
  defaultProps: {elevation:0},
  styleOverrides: {
    root: ({ownerState , theme}) => ({
        backgroundColor: "transparent",
        marginBottom: "10px",
        border: "none",
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
        ":before": { backgroundColor: "transparent" },
    }),
  },
}
