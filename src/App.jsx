import { useState, useEffect } from "react";
import { ThemeProvider, Button, Typography } from "@mui/material";
import muiTheme from "./theme";
import "./index.css";
import TopSalesSlider from "./components/homeComponents/TopSalesSlider";

export default function App() {
  const [theme, setTheme] = useState("theme1");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "theme1" ? "theme2" : "theme1"));

  return (
    <ThemeProvider theme={muiTheme}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--text)] font-[var(--font-sans)]">
        <Typography
          variant="h1"
          className="mb-6 font-[var(--font-heading)] text-[var(--text)]"
        >
          سلام من دولوپرم
        </Typography>

        <div className="absolute ">
          <p>نه ببین 3 تا شده دیگه</p>
        </div>

        <Button
          variant="contained"
          onClick={toggleTheme}
          sx={{
            backgroundColor: "var(--primary)",
            color: "var(--bg)",
            "&:hover": {
              backgroundColor: "var(--secondary)",
            },
            fontFamily: "var(--font-heading)",
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          تغییر تم {theme === "theme1" ? "Theme 2" : "Theme 1"}
        </Button>
      </div>
      <TopSalesSlider />
    </ThemeProvider>
  );
}
