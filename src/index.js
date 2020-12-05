import React from "react";
import ReactDOM from "react-dom";

//Memanggil sebuah variabel App dari directory ./App
import App from "./App";

const rootElement = document.getElementById("root");
//method untuk me-render element App ke dalam DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
