import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";

import ShopMain from "./components/shop-components/ShopMain";
import "./index.css";
import muiTheme from "./theme";
import { ThemeProvider } from "@mui/material";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import PasswordPage from "@/pages/PasswordPage";
import NotFound from "@/pages/NotFound";
import Contact from "@/pages/Contact";
import About from "@/pages/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={muiTheme}>
          <ShopMain />
          <About />
          <Contact />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/password:phone" element={<PasswordPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<About />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
