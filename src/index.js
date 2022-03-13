import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

import App from "./App";
import { CategoryProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
