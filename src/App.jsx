import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/home-components/Footer";
import Header from "./components/home-components/Header";
import HeroSection from "./components/home-components/HeroSection";
import ShopMain from "./components/shop-components/ShopMain";

import "./index.css";
import muiTheme from "./theme";
import { ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <Header />
        <HeroSection />
        <ShopMain />
        <About />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
