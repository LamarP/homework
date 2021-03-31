import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import reducer from "./reducer.js";
import Root from "../root.jsx";

document.addEventListener("DOMContentLoaded", () => {
  const store = createStore(reducer);
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});