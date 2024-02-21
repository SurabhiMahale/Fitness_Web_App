import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
