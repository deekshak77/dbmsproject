import React from "react";
// reactJS is library so import it
import ReactDOM from "react-dom/client";
//document object model - layout of webpage
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// we r using bootstrap for styling

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
