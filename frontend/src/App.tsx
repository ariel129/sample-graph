import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/app.scss";

import { Routes } from "./Routes";

export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </div>
  );
};
