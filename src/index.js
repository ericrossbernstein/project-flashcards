import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <Router
      basename={
        window.location.hostname === "localhost"
          ? "/project-flashcards/"
          : process.env.REACT_APP_API_BASE_URL
      }
    >
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
