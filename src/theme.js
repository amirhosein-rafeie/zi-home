import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: { 
      main: "#dc2655" ,
      main50: "#fdf2f6",
      main100: "#fce7ef",
      main200: "#fbcfe0",
      main300: "#faa7c5",
      main400: "#f5719e",
      main500: "#ef5a88",
      main700: "#bf173e",
      main800: "#9e1634",
      main900: "#84172f",
      main950: "#510616",
    },

    common:{
      black: "#151617",
      white: "#e1e2e3",
    },
    success:{
      main: "#00a478",
      light: "#00ba88",
      dark: "#008364",
    },
    warning:{
      main: "#f3a62c",
      light: "#f4b740",
      dark: "#ec8514",
    },
    error:{
      main: "#ed2e2e",
      light: "#f87171",
      dark: "#dc2626",
    },
    gray:{
       50: "#f0f1f1" ,
       100: "#e1e2e3" ,
       200: "#d1d4d4 ",
       300: "#c2c5c6" ,
       400: "#a4a9aa" ,
       500: "#858c8d" ,
       600: "#676f71" ,
       700: "#52595a" ,
       800: "#3e4344" , 
       900: "#292c2d" ,
       950: "#151617",
    },
  },
  typography: {
    fontFamily: "var(--font-sans)",
    h1:{
      fontSize: "48px",
    },
     h2:{
      fontSize: "40px",
    },
     h3:{
      fontSize: "32px",
    },
     h4:{
      fontSize: "",
    },
     h5:{
      fontSize: "",
    },
     h6:{
      fontSize: "",
    },
  },
});

export default muiTheme;
