import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";

import "./index.css";
import muiTheme from "./theme";
import { ThemeProvider } from "@mui/material";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={muiTheme}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
