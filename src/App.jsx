import Footer from "./components/home-components/Footer";
import Header from "./components/home-components/Header";
import HeroSection from "./components/home-components/HeroSection";

import "./index.css";
import muiTheme from "./theme";
import { ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <Header />
      <HeroSection />
      <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
