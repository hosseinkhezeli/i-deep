import theme from "@/theme/theme";

export const darkPalette = {
  // palette values for light mode
  // 50 shade is main shade with less opacity
  //100 darkest shade / 20 lightest shade / back for overlays
  primary: {
    main: "#0088cc",
    dark: "#005F8F",
    light: "#1FB4FF35",
    contrastText: "#fff",
  },
  secondary: {
    main: "#fff",
    dark: "#E9EEF0",
    light: "#DBEBFF35",
    contrastText: "#1d1d1d",
  },
  divider: "#8E8E8E",

  background: {
    main: "#1d1d1d",
    default: "#1d1d1d",
    paper:"#333333",
    1: "#393939",
    2: "#323232",
    3: "#1d1d1d",
  },
  success: {
    main: "#35E188",
    light: "rgb(93, 231, 159)",
    dark: "rgb(37, 157, 95)",
    contrastText: "rgba(0, 0, 0, 0.87)"
  },
  warning: {
    main: "#ffa500",
    100: "#DC8F00",
    75: "#EB9900",
    50: "#ffa50035",
    25: "#FFBC3E",
    20: "#FFCD7035",
    light: "rgb(255, 183, 51)",
    dark: "rgb(178, 115, 0)",
    contrastText: "rgba(0, 0, 0, 0.87)"
  },
  error: {
    main: "#E23F2D",
    100: "#AB2C1D",
    75: "#BD3425",
    50: "#E23F2D35",
    25: "#F85948",
    20: "#FD6F5F35",
  },
  common: {
    "black": "#000",
    "white": "#fff"
},
  text: {
    primary: "#fff",
    secondary: "#1d1d1d",
    disabled: "#8E8E8E",
  },
  button:{
    primary: "#fff",
    secondary: "#1d1d1d",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
  A700: "#616161"
},
contrastThreshold: 3,
tonalOffset: 0.2,
action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
},
  // mode:"dark",
};


