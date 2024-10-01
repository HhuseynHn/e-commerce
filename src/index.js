/** @format */

import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import "flowbite";
import "flowbite/dist/flowbite.css";
import i18n from "./config/i18n";

import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { CardProvider } from "./context/card-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CardProvider>
      <App />
    </CardProvider>
  </BrowserRouter>
);
