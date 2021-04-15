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
        window.location.hostname === "localhost" ? "/" : "/project-flashcards/"
      }
    >
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
