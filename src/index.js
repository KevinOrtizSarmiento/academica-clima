import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
require("dotenv").config()


ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,

  document.getElementById("root")
);

