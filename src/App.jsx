import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";

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
            <Route path="/password:phone" element={<PasswordPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
