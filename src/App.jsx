import "./index.css";
import TopBanner from "./components/home-components/header/TopBanner";
import Contact from "./components/Contact/Contact";
import muiTheme from "./theme";
import { ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <TopBanner />
      </ThemeProvider>
    </div>
  );
};

export default App;
