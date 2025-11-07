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

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={muiTheme}>
          <Routes>
            <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <ShopMain />
        <About />
        <Contact />
        <Route path="/password:phone" element={<PasswordPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
