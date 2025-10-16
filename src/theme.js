import { extendTheme } from "@mui/material/styles";

const muiTheme = extendTheme({
  cssVarPrefix: "mui",
  direction: "rtl",
  palette: {
    mode: "light",
    primary: { 
      main: "#dc2655",
      light: "#f5719e",
      dark: "#9e1634",
      shades: {
        50: "#fdf2f6",
        100: "#fce7ef",
        200: "#fbcfe0",
        300: "#faa7c5",
        400: "#f5719e",
        500: "#ef5a88",
        700: "#bf173e",
        800: "#9e1634",
        900: "#84172f",
        950: "#510616",
      },
    },
    common: {
      black: "#151617",
      white: "#e1e2e3",
    },
    success: {
      main: "#00a478",
      light: "#00ba88",
      dark: "#008364",
    },
    warning: {
      main: "#f3a62c",
      light: "#f4b740",
      dark: "#ec8514",
    },
    error: {
      main: "#ed2e2e",
      light: "#f87171",
      dark: "#dc2626",
    },
    grey: {
      50: "#f0f1f1",
      100: "#e1e2e3",
      200: "#d1d4d4",
      300: "#c2c5c6",
      400: "#a4a9aa",
      500: "#858c8d",
      600: "#676f71",
      700: "#52595a",
      800: "#3e4344",
      900: "#292c2d",
      950: "#151617",
    },
  },
  typography: {
    fontFamily: "var(--font-sans)",
    h1: { fontSize: "48px" },
    h2: { fontSize: "40px" },
    h3: { fontSize: "32px" },
    h4: { fontSize: "24px" },
    h5: { fontSize: "20px" },
    h6: { fontSize: "16px" },
  },
});

export default muiTheme;
