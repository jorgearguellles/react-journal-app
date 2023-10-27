import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";

import { JournalApp } from "./JournalApp";
import { Provider } from "react-redux";
import { store } from "./store";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
