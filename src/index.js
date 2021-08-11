import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import StateWise from "./StateWise";

ReactDOM.render(
  <React.StrictMode>
    <App />,
    <StateWise />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
