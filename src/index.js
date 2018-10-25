import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Vidly from "./components/vidly";
ReactDOM.render(
  <BrowserRouter>
    <Vidly />
  </BrowserRouter>,
  document.getElementById("root")
);
