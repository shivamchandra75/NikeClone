import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { MainStateProvider } from "./Context/MainStateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainStateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainStateProvider>
  </React.StrictMode>,
);
