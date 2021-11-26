import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.css";
import { ResultContextProvider } from "./context/ResultContextProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ResultContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResultContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
