import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "App";
import {
  CartProvider,
  CategoryProvider,
  ToastProvider,
  UserProvider,
  WishListProvider,
} from "context";
import { Compose } from "components";

import { makeServer } from "server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Compose
      components={[
        BrowserRouter,
        UserProvider,
        ToastProvider,
        CategoryProvider,
        CartProvider,
        WishListProvider,
      ]}
    >
      <App />
    </Compose>
  </React.StrictMode>,
  document.getElementById("root")
);
